async function insertDataIntoDB(json_msg, webSocket) {

  let scheme_from_msg = json_msg.name;
  scheme_from_msg = scheme_from_msg.toLowerCase().trim();

  const response = await pool.query("SELECT schemename_user FROM logschemes");
  if (response) {
    let all_schemes = JSON.stringify(response.rows);

    if (!all_schemes.includes(scheme_from_msg)) {
      const response = await pool.query("SELECT COUNT (*) FROM logschemes");
      const text = 'INSERT INTO logschemes' + 
        '(schemename_user, tablename_server) VALUES($1, $2)';
      const table_server = "table_server_" + response.rows[0].count;
      const values = [scheme_from_msg, table_server];
      // More code...
      await pool.query(text, values);
      await create_table(table_server, webSocket);
      await sendSchemeName(webSocket);
    }
    const current_table = await pool.query("SELECT tablename_server FROM logschemes WHERE schemename_user = '" + scheme_from_msg + "'");
    const text = 'INSERT INTO ' + current_table.rows[0].tablename_server + '(time, status) VALUES($1, $2)';
    const values_to_query = JSON.parse(json_msg.json);

    for (let index = 0; index < values_to_query.data.length; index++) {
      const values = [values_to_query.data[index].time, values_to_query.data[index].status];
      await pool.query(text, values);
      console.log(text);
    }
  }
  else {
    console.log("ERROR TO INSERT DATA INTO DB");
  }
}

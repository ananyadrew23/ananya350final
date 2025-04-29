let connection

export async function getDB() {
  if (!connection) {
    const mysql = await import('mysql2/promise')
    connection = await mysql.createConnection(process.env.MYSQL_URI)
  }
  return connection
}


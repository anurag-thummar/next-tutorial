// // lib/db.ts
// import { Pool } from 'pg'

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// })

// export default pool


// const {username, password}= process.env 

// const username = process.env.username;



// src/lib/db.ts

import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;
console.log('🔗 Connecting to Postgres with:', connectionString);

const pool = new Pool({ connectionString });    
export default pool;

const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
});

let test = {};
test.Login = (username) => {
    return new Promise((resolve, reject) => {
        pool.query('select *from logintbl where username=?', [username], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);

        });

    });

};
test.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('select *from amtbl', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });

    });

};
test.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('select *from amtbl where id=?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results[0]);
        });

    });

};
test.insert = (id, name, date) => {
    return new Promise((resolve, reject) => {
        pool.query('insert into  amtbl values (?,?,?)', [id, name, date], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });

    });
};
test.delete = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('delete from  amtbl where id=? ', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });

    });
};
test.put = (name, id) => {
    return new Promise((resolve, reject) => {
        pool.query('update amtbl set name=? where id=? ', [name, id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });

    });
};
test.catall = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM categuraytbl', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });

    });

};
test.catone = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('select *from categuraytbl where id=?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results[0]);
        });

    });

};
test.catinsert = (categuray, date) => {
    return new Promise((resolve, reject) => {
        pool.query('insert into  categuraytbl (categuray,date) values (?,?)', [categuray, date], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });

    });
};
test.catput = (categuray, date,id) => {
    return new Promise((resolve, reject) => {
        pool.query('update categuraytbl set categuray=?, date=? where id=? ', [categuray, date,id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });

    });
};
test.catdelete = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('delete from  categuraytbl where id=? ', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });

    });
};
test.postall = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT (postbl.id),(postbl.depar),(postbl.postitl),(postbl.date),(categuraytbl.categuray) from postbl INNER JOIN categuraytbl ON postbl.catid=categuraytbl.id', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });

    });

};
test.postone = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('select *from postbl where id=?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results[0]);
        });

    });

};
test.postinsert = (depar, postitl,date,catid) => {
    return new Promise((resolve, reject) => {
        pool.query('insert into  postbl (depar,postitl,date,catid) values (?,?,?,?)', [depar, postitl,date,catid], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });

    });
};
test.postput = (depar, postitl,date,catid,id) => {
    return new Promise((resolve, reject) => {
        pool.query('update postbl set depar=?, postitl=?,date=?,catid=? where id=? ', [depar, postitl,date,catid,id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });

    });
};
test.postdelete = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('delete from  postbl where id=? ', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });

    });
};

module.exports = test;
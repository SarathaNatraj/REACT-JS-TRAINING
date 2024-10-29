import { useState } from "react"
let req: IDBOpenDBRequest;

let version = 1;

let db: IDBDatabase;
function createDatabase() {
    req = window.indexedDB.open("articles_db", version);
    req.onsuccess = (e) => {
        db = req.result;
        console.log(db);


        return db;
    }
    req.onerror = (e) => {
        console.log(" IndexedDB Error ");
    }
    req.onupgradeneeded = function () {
        let db = req.result;
        let store = db.createObjectStore("HistoricalTable", { keyPath: "id" });
        let index = store.createIndex("CIndex", ["time", "value"]);
    };

}

function insertValues(userName: string) {
    var open = window.indexedDB.open('articles_db', 2);

    open.onupgradeneeded = function () {
        let db = open.result;
        db.createObjectStore('HistoricalTable');
    };

    open.onsuccess = function () {
        let db = open.result;
        let tx = db.transaction(["HistoricalTable"], 'readwrite');
        let store = tx.objectStore('HistoricalTable');
        let request = store.put("name", userName);

        //get, add, put, delete

        let values: any = store.getAllKeys();




        request.onsuccess = function () {
            console.log('success!', values);
            console.log(values);
        };
        request.onerror = function () {
            console.log(request.error);
        };
    }; return db;

}



const Form = () => {

    const [userName, setUserName] = useState("");
    const [dispName, setDispName] = useState("");
    const click = () => {
        localStorage.setItem("userName", userName);
    }
    const handleSubmit = () => {
        //   event.preventDefault();
        const userName = localStorage.getItem("userName");
        console.log(userName);
        const displayName = JSON.stringify(userName);
        setDispName(displayName);
        createDatabase();

    }

    const handleSubmitIndexedDB = () => {
        //   event.preventDefault();
        const userName = localStorage.getItem("userName");
        console.log(userName);
        const displayName = JSON.stringify(userName);
        setDispName(displayName);
        //         db =   createDatabase();

    }

    const handleInsert = () => {
        //   event.preventDefault();
        const userName = localStorage.getItem("userName");
        console.log(userName);
        const displayName = JSON.stringify(userName);
        setDispName(displayName);
        insertValues(displayName);

    }

    return (
        <div>
            <input type="text" value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="UserName"
            />
            <label>
                <input type="checkbox" onClick={(e) => click()} />
                Remember Me
            </label>
            <h1>{dispName}</h1>
            <button onClick={handleSubmit}>Get Local Storage</button>
            <button onClick={handleSubmitIndexedDB}> IndexedDB - Create</button>
            <button onClick={handleInsert}> IndexedDB - Insert</button>

        </div>
    )

}

export default Form;
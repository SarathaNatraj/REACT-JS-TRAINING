import { ObjectFlags } from "typescript";

function Database(){
    let db:any;
    function createDatabase(){
        const req = window.indexedDB.open("articles_db", 1);
        req.onsuccess = (e) => {
            db = req.result;
            const  objectStore = db.createObjectStore('article', {keyPath : 'article'})

            //Indexes
            objectStore.createIndex('name',  'name' , {unique:true});
            objectStore.createIndex('title',  'title' , {unique:true});
            objectStore.createIndex('author',  'author' , {unique:true});

            objectStore.transaction.oncompleted = (e:any) =>{
                    console.log("Object store created !");
                
            }

        }
        req.onerror= (e) => {
            console.log(" IndexedDB Error ");
        }
        req.onupgradeneeded = (e) => {
            console.info(" We are updating the IndexedDB")
            db = req.result;
        }
    }

    const transaction = db.transaction('articles', 'read')
}

export default Database;
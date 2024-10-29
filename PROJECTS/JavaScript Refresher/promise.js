// var promise = new Promise((resolve, reject) => {
//     let isError = true;
//     if (!isError) {
//         resolve('Task Completed');
//     } else {
//         reject('Error Occurred');
//     }
// });

// promise
//     .then(res => console.log(res))
//     .catch(err => console.log(err));


const items = ['Item1', 'Item2'];

const GetItems = () => {
    items.map(x => console.log(x));
}

const AddItem = (item) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false;
            if (!error) {
                items.push(item);
                resolve('Task Completed');
            } else {
                reject('Error Occurred');
            }

        }, 2000);
    });
}

// AddItem('Item3').then(res => GetItems())
//     .catch(err => console.log(err));

const RunTask = async () => {
    await AddItem('Item3').catch(err => console.log(err));
    GetItems();
}

RunTask();
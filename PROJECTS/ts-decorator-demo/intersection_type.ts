//intersection type is a type that merges several kinds into one. 
interface Book {
    book_id: number
    book_name: string
 }
 
 interface Author {
    author_id: number
    author_name: string
 }

//A U B - A & B
//A   intersection B - A, B - common values
 
 // & - intersection type
 // | - union type

 //definition of intersection type
 type intersected_type = Book & Author
 
 //initialising the values
 let intersected_type_object: intersected_type = {
    book_id: 101,
    book_name: 'Typescript is Awesome',
    author_id: 202,
    author_name: 'Manning!',
 }
 
 console.log('Book Id: ' + intersected_type_object.book_id)
 console.log('Book name: ' + intersected_type_object.book_name)
 console.log('Author Id: ' + intersected_type_object.author_id)
 console.log('Author name: ' + intersected_type_object.author_name)


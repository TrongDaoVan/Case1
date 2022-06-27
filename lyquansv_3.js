class StudentManagement {
    constructor(arr) {
        this.students = arr;
    }
    showList() {
        let table = '';
        for (let i = 0; i < this.students.length; i++) {

            table += '<tr>';
            table += '<td>';
            table += this.students[i].id;
            table += '</td>';

            table += '<td>';
            table += this.students[i].fullname;
            table += '</td>';

            table += '<td>';
            table += this.students[i].date;
            table += '</td>';

            table += '<td>';
            table += this.students[i].gender;
            table += '</td>';

            table += '<td>';
            table += this.students[i].grade;
            table += '</td>';


            table += '<td>' +
                '<button style="background-color: #00ff22; color: white "  type="button" onclick="deleteStudent('+i+')">Delete</button> ' +
                ' <button  style="background-color: #0800ff ; color: white" type="button" onclick="editStudent('+i+')">Edit</button>' +
                '</td>';

            table += '</tr>';
        }
        document.getElementById('list-student').innerHTML = table;
    }

    addStudent(student) {
        this.students.push(student);
    }

    delete(id) {
        // Xóa 1 đối tượng tại địa chỉ chọn
        this.students.splice(id, 1);
    }
// Tìm kiếm tại vị trí
    findStudentById(id){
        return this.students[id];
    }

    edit(student,id, fullname, date, gender, grade){
        student.setID(id)
        student.setFullname(fullname)
        student.setDate(date)
        student.setGrade(gender)
        student.setGrade(grade)
    }

}

class Student {
    constructor (id, fullname, date, gender, grade) {
        this.id= id;
        this.fullname= fullname;
        this.date= date;
        this.gender= gender;
        this.grade= grade;
    }
    getID() {
        return this.id;
    }
    getFullname() {
        return this.fullname;
    }
    getDate() {
        return this.date;
    }
    getGender(){
        return this.gender;
    }
    getGrade() {
        return this.grade;

    }

    setID(id) {
        this.id=id;
    }
    setFullname(fullname) {
        this.fullname=fullname;
    }
    setDate(date) {
        this.date=date;
    }
    setGender(gender){
        this.gender=gender;
    }
    setGrade(grade) {
        this.grade=grade;
    }
}

let arr =[];
let manage = new StudentManagement(arr);
// add 1
function addStudentObject(){
    let id = document.getElementById('id').value;
    let name = document.getElementById('fullname').value;
    let date = document.getElementById('date').value;
    let gender = document.getElementById('gender').value;
    let grade = document.getElementById('grade').value;

    let student = new Student(id,name,date,gender,grade);
    // add2 them đối tượng vào mảng arr.
    manage.addStudent(student);
    //add3 hiển thi lại tất cả trong mảng
    manage.showList();
    // vê chuỗi rỗng
    clear();
}
// sau khi thêm xong ô input sẽ hiển thị chỗi rỗng
function clear(){
    document.getElementById('id').value = '';
    document.getElementById('fullname').value = '';
    document.getElementById('date').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('grade').value = '';
}
//delete theo id mang xuông
function deleteStudent(id) {
    manage.delete(id);
    manage.showList();
}

let studentId = 0;

function editStudent(id){
    // findStudentById hàm tìm kiếm tại địa chỉu id và hiển thị lại nó để sửa
    let student = manage.findStudentById(id);
    document.getElementById('id').value = student.id;
    document.getElementById('fullname').value = student.fullname;
    document.getElementById('date').value = student.date;
    document.getElementById('gender').value = student.gender;
    document.getElementById('grade').value = student.grade;
    studentId = id;
}
//updateStudent1
function updateStudent(){
    // tìm kiếm tại vị trí cần update (update với studenId)
    let student = manage.findStudentById(studentId);
    // trước khi update
    let id = document.getElementById('id').value;
    let name = document.getElementById('fullname').value;
    let date = document.getElementById('date').value;
    let gender = document.getElementById('gender').value;
    let grade = document.getElementById('grade').value;
//updateStudent 2
    manage.edit(student,id,name,date,gender,grade);
    manage.showList();
    clear();
}
// Luôn luôn hiển thị đối tượng đo
manage.showList();

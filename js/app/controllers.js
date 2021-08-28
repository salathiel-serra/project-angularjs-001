angular.module("myModule")
.controller("indexController", ($scope)=>{
  $scope.title    = "Application With Angular JS";
  $scope.students = [
    { name:"João", email:"joao@mail.com", note_1:7.0, note_2:8.5, note_3:6.5 },
    { name:"Ana", email:"ana@mail.com", note_1:9.0, note_2:7.0, note_3:8.0 },
    { name:"Mateus", email:"mateus@mail.com", note_1:5.0, note_2:5.5, note_3:10 },
    { name:"Aline", email:"aline@mail.com", note_1:10, note_2:8.5, note_3:9.5 },
    { name:"Bruna", email:"bruna@mail.com", note_1:9.5, note_2:9.5, note_3:8.5 }
  ];

  // Método para inicializar calculo de médias no carregamento da app, melhorando performance
  const init = ()=>{
    $scope.students.forEach((student)=>{
      student.average =  average(student);
    });

    cleanForm(); 
  };

  // Método local para calculo de média
  const average = (student)=>{
    let average = (parseFloat(student.note_1) + parseFloat(student.note_2) + parseFloat(student.note_3)) /3;
    return average.toFixed(2);
  }

  $scope.openAddStudent = ()=>{
    cleanForm(); 
    $scope.isEditing = false;
    $('#modal1').modal('open');
  }

  $scope.addStudent = (student)=>{
    student.average = average(student);
    $scope.students.push(student);

    $('#modal1').modal('close');
    
    cleanForm(); 
  }

  $scope.isEditing = false;
  var editStudentTemp;

  $scope.editStudent = (student)=>{
    $scope.isEditing = true;

    angular.copy(student, $scope.student);

    $('#modal1').modal('open');
    editStudentTemp = student;
  }

  $scope.saveStudent = (student)=>{
    editStudentTemp.name    = student.name;
    editStudentTemp.email   = student.email;
    editStudentTemp.note_1  = student.note_1;
    editStudentTemp.note_2  = student.note_2;
    editStudentTemp.note_3  = student.note_3;
    editStudentTemp.average = average(student);

    $('#modal1').modal('close');
  }

  $scope.deleteStudent = (student)=>{
    
    for (let index in $scope.students) {
      let currentStudent = $scope.students[index];
      if (student === currentStudent) {
        $scope.students.splice(index, 1);
      }
    }

  }

  const cleanForm = ()=>{
    $scope.student = { name:"", email:"", note_1:"", note_2:"", note_3:"" };
  }

  init();

});
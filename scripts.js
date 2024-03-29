
const cardList = [
    {
      title: "Michael Jordan",
      image: "images/MJ.jpg",
      link: "#",
      description: "The Greatest of all time"
    },
    {
      title: "Tim Duncan",
      image: "images/TD.jpg",
      link: "#",
      description: "Greatest Power Forward of all time"
    },
    {
      title: "Lebron James",
      image: "images/LBJ.jpg",
      link: "#",
      description: "Flop King Supreme"
    }
  ];
  
  const clickMe = () => {
    alert("I am glad you clicked me. Hope we clik  *wink");
  };
 
  const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();

    console.log("Form Data Submitted: ", formData);
}

  const addCards = (items) => {
    items.forEach(item => {
      let itemToAppend = `
        <div class="col s4 center-align">
          <div class="card medium">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="${item.image}">
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
              <p><a href="${item.link}">Learn more about this guy</a></p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
              <p>${item.description}</p>
            </div>
          </div>
        </div>`;
      $("#card-section").append(itemToAppend);
    });
  };
  

  $(document).ready(function() {
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
      clickMe();
    });
    $('#formSubmit').click(() =>{
        submitForm();
    })
    addCards(cardList);
    $('.modal').modal();
  });


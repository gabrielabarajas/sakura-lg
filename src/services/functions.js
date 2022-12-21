
const GetCards = (state) =>{
    fetch ('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
    .then (resp => resp.json ())
    .catch(error => console.log('Error:', error))
    .then (data => state(data))
};

export default GetCards;


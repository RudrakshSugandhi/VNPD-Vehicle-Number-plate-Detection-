const getValuesFromInputs = () =>{
    const profileVideo = document.querySelector('input.profile-video').files[0];
 
    document.querySelector('form').style.display = 'none';
 
    return [profileVideo];
   
 }
 
 const convertInputValues = () => {
   const [profileVideo] = getValuesFromInputs();
   
   const profileVieoURL = URL.createObjectURL(profileVideo);
   
   return[profileVideoURL]
 
 }
 
 const addInputToProfile = () => {
 
     const [profileVideoURL]  = convertInputValues();
 
     document.querySelector('.aud').setAttribute('src', profileVideoURL);
 
     document.querySelector('.header').style.display = 'flex';
 }
 
 document.querySelector('button').addEventListener('click', (e) => {
   e.preventDefault();
   addInputToProfile();
 });
 
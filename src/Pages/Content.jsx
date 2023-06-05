import { Container} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Content() {

    const navigate = useNavigate();

useEffect(() => {
if(localStorage.getItem('login')==null){
  navigate('/login');
}
});

    return (
      <Container>
        <h1>Content Page</h1>
        <p>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor mauris non enim eleifend, in lacinia orci sollicitudin. Nullam sed arcu ut ante fringilla vulputate at in eros. Curabitur blandit risus in mi volutpat, a dapibus magna euismod. Proin consequat, mauris eget viverra finibus, velit sem tincidunt lectus, sed efficitur nulla dui a arcu. Sed sodales, odio vel facilisis tincidunt, lacus leo dapibus urna, sed gravida mauris enim at ligula. Ut iaculis justo eget est malesuada, at tincidunt velit gravida. Sed a lacinia lorem. Fusce sagittis quam augue, ut luctus justo efficitur nec. Vivamus rutrum sapien nec dui laoreet, ut venenatis nunc tincidunt. Suspendisse potenti. Sed varius est a nisi lobortis, in mattis felis euismod. Etiam faucibus gravida metus in bibendum. Suspendisse ut felis vitae dui euismod cursus.
<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, urna vitae tristique tempor, enim nulla tincidunt urna, id fringilla neque ipsum vitae felis. Sed dapibus cursus leo, a ullamcorper orci. Curabitur id faucibus neque. Morbi sed hendrerit nulla. Maecenas scelerisque metus in mi facilisis, eget ullamcorper dui rutrum. Aliquam auctor, ligula nec aliquet viverra, felis ex suscipit ante, nec dignissim neque elit a mauris. Vivamus auctor sapien nec nunc varius posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Fusce in nulla lorem.
<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit mi id arcu feugiat auctor. Sed at purus a lorem ultrices sagittis non nec tortor. Donec nec ligula sed leo efficitur tincidunt. Vestibulum id eros libero. Proin dapibus luctus lacus, a cursus quam. Nunc venenatis gravida sollicitudin. Phasellus at convallis mauris. Vivamus a ligula a mi dictum interdum vitae et mi. Vestibulum suscipit nunc eget massa pulvinar rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean vitae tellus ligula. Cras pretium dui a est feugiat, eu cursus elit pulvinar. Sed eget arcu sed purus elementum venenatis.
        </p>
      </Container>
    );
  }
  
  export default Content;
  
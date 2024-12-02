@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
@font-face {
    font-family: 'MinhaFonte2';
    src:url('Garet-Book.woff') format('woff');
    font-weight: bold;
    font-style: italic;
}

h3,h2 {
    font-size: 35px;
    text-align: center;
    font-family: "Chakra Petch", sans-serif;
}
p, h4{
    font-family: 'MinhaFonte2';
}
a{
    background-color: #1AB6D9;
    font-family: 'MinhaFonte2';
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    width: 20vh;
    padding: 2vh;
    border: none; 
    color: white;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    border-radius: 12px; 
    transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
}

a:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); /* Adiciona sombra ao botão no hover */
    transform: translateY(-2px); /* Move o botão um pouco para cima no hover */
  }
  
  a:active {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Sombra reduzida no clique */
    transform: translateY(2px); /* Move o botão para baixo no clique, criando efeito de afundamento */
  }

  #ATEXT{
    background-color: #006379;
    font-family: 'MinhaFonte2';
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6vh;
    width: 18vh;
    padding: 1vh;
    color: white, muda 0.3s ease-in-out;
    font-size: 16px;
    cursor: pointer;
    border-radius: 12px; 
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  #ATEXT:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); /* Adiciona sombra ao botão no hover */
    color:#006379;
    background-color: white;
    transform: translateY(-2px); /* Move o botão um pouco para cima no hover */
  }
  
  #ATEXT:active {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Sombra reduzida no clique */
    transform: translateY(2px); /* Move o botão para baixo no clique, criando efeito de afundamento */
  }

.Header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
}

.Header img {
    height: 30vh;
    border-radius: 20px;
}

.Sobre {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    font-size: 20px;
    text-align: justify;
    margin: 5vh;
}


.Projetos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;
}

.Bytes {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
    height: 60vh;
    margin: 2vh;
}

.Bytes img {
    height: 30vh;
    background-color: aliceblue;
}

.Text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
}

.Competencias {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}


 .Items{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 150px;
    width: 150px;
    padding: 15px;
    margin: 5px;
 }

 .Items h4{
    font-weight: 300;
    text-align: center;}

.Items img {
    width: 80px;
    height: 80px;
}

.Contatos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin: 2vh 6vh;
    height: 40vh;
   
}

.item{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 200px;
    height: 50px;
    
}

h5{
    text-align: center;
}



/* 
.header {
    background-image: url("../IMG/peri03.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.5;

}


.MiniHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px 20px;
    z-index: 10;
    background-color: rgb(85, 85, 85, 0.4);
}

.FirstTitle {
    display: flex;
    align-items: center;
    gap: 45vh;
}

#ImgNavBar {
    background-color: aliceblue;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    object-fit: cover;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}


#menu {
    background-color: #333;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

#menu:hover {
    background-color: #555;
}


#navbar {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    text-align: center;
    padding: 20px;
    z-index: 1;
}

#navbar ul {
    list-style: none;
    padding: 0;
}

#navbar ul li {
    margin: 10px 0;
}

#navbar ul li a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    transition: color 0.3s ease;
}

#navbar ul li a:hover {
    color: #ffcc00;
}

Botão de fechamento
#Close {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    color: white;
    font-size: 24px;
    border: none;
    cursor: pointer;
    transition: color 0.3s ease;
}

#Close:hover {
    color: #ffcc00;
}



.slogan, .nome {
    padding: 10px;
    margin: 10%;
    text-align: center;
    border-radius: 25px;
    font-size: 20px;
    font-family: "Play", sans-serif;
    color: #ffffff;
    background-color: rgb(0, 0, 0, 0.8);
    animation: subirDescer 4s ease-in-out infinite;
  
}

@keyframes subirDescer {
    0%,
    50% {
        transform: translateY(0);
        box-shadow: none;
    }

    50% {
        
        transform: translateY(-1.25rem);
        box-shadow: 0 1.25rem 2.5rem rgba(0, 0, 0, 0.5);
    }
}
 */

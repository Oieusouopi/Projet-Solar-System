<h1>Projeto - Solar System </h1>
<h2>Descrição do projeto</h2>
<p>Um projeto para demonstrar os aprendizados em Context Api Hooks e React fazendo um forms de usuário </br>
utilizando também manipulação de objeto.</p>
<h2>Tecnologias utilizadas no desenvolvimento</h2>
<ul>
<li>React</li>
<li>React Hook</li>
<li>JavaScript</li>
<li>Context Api</li>
<li>Routes</li>
<li>Manipulação de array e objeto</li>
</ul>
<h2>Como executar o projeto</h2>
<p>Primeiro configuramos o Context Api e as Routes que vão estar respectivamente na pasta context e na pasta Routes.</p>
<p>A primeira página será o login do usuário tendo o username o email e a senha do usuário lembrando que devemos fazer a verificação de email com Regex e será váldio se a senha tem mais de 6 caracteres só após isto o usuário podera logar com a conta.</p>
<p>Na página de menu terá o username do usuário e dois botões onde um botão dara acesso ao sistema solar e o outro botão dara acesso as missões feitas utilizando o useHistory para mandarmos para as páginas descritas.</p>
<p>No sistema solar importa um componente chamado planetCard que recebe duas props o PlanetImage e o planetName que são respectivamente a imagem do planeta e o nome que são atribuidos através de uma array de objetos que temos no data/planets contendo os valores dos planetas, importei também o componente Title que através de props teremos o título da página que estamos, utilizei também high order function para mapear a array de objetos que tem no data e um botão que voltará para o menu</p>
<p>Na página de missões tem a mesma ideia do sistema solar importando o MissionCard e utilizando as props(year, name, country e destination) que serão o ano, nome, país e o destino da missão respectivamente e utiliza o Title que dará o título da página e um botão que voltará para o menu.</p>

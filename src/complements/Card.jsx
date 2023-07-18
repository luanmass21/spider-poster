/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
export default function Card() {
  return (
    <section
      style={{
        backgroundColor: "#CCFFCC",
        margin: "20px",
        borderRadius: "14px",
      }}
    >
      <div style={{ display: "flex" }}>
        <img
          src="https://cdn.pixabay.com/photo/2020/07/14/09/20/spiderman-5403583_1280.jpg"
          alt=""
          style={{
            width: "400px",
            height: "500px",
            border: "10px solid black",
            margin: "19px",
            padding: "2px",
          }}
        />

        <div style={{ marginLeft: "40px" }}>
          {" "}
          <h1>
            <b>Homem-Aranha</b>
          </h1>
          <p>
            Em uma cidade agitada e cheia de arranha-céus, um herói surge para
            proteger os inocentes dos perigos que se escondem nas sombras. O
            Homem-Aranha, também conhecido como Peter Parker, é uma figura
            icônica do universo dos quadrinhos e do cinema, encantando gerações
            com suas incríveis habilidades e carisma.
          </p>
          <p>
            Ao ser mordido por uma aranha radioativa, Peter Parker adquire
            poderes extraordinários, incluindo agilidade sobre-humana, força
            sobre-humana e a habilidade de escalar paredes. Com seu traje
            vermelho e azul, o Homem-Aranha enfrenta vilões poderosos, protege
            os cidadãos e luta pela justiça em uma jornada repleta de desafios e
            responsabilidades.
          </p>
          <p>
            A história do Homem-Aranha é uma inspiração para muitos, ensinando
            lições importantes sobre coragem, responsabilidade e a importância
            de usar poderes extraordinários para o bem. Seja nos quadrinhos,
            filmes ou jogos, o Homem-Aranha continua a cativar e emocionar o
            público com suas aventuras emocionantes.
          </p>
          <p>
            Peter Parker enfrenta muitos desafios em sua vida dupla como o
            Homem-Aranha, equilibrando seus deveres como super-herói com suas
            responsabilidades como estudante e fotógrafo do Clarim Diário.
            Embora a vida de um herói não seja fácil, o Homem-Aranha prova que
            com grandes poderes vêm grandes responsabilidades.
          </p>
          <p>
            A icônica frase "Com grandes poderes vêm grandes responsabilidades"
            tornou-se um lema duradouro do Homem-Aranha e é uma mensagem que
            ressoa com fãs de todas as idades. A jornada do Homem-Aranha é
            repleta de emoção, ação e lições valiosas, tornando-o um dos
            super-heróis mais amados e admirados de todos os tempos.
          </p>
          <p>
            Prepare-se para se emocionar com as incríveis aventuras do
            Homem-Aranha, enquanto ele balança pelas ruas da cidade, enfrenta
            inimigos poderosos e protege os inocentes de perigos iminentes.
            Descubra o que faz do Homem-Aranha um herói tão único e amado em sua
            jornada para se tornar um símbolo de esperança e justiça.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{
                margin: "10px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "25px",
                padding: "10px 20px",
                fontSize: "1.2em",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
              }}
            >
              COMPRAR AGORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

const SobrePretaLabPage = () => {
  return (
    <main>
      <section>
        <Stack mt="100px" alignItems="center" >
          <Typography variant="h1" sx={{mt: 1, mb: 5, alignItems:"center", color: "#be89cb"}}>PretaLab</Typography>
          <Typography variant="p" sx={{mt: 1, mb: 5, alignItems:"center"}}>A PretaLab é uma iniciativa que reforça a necessidade e a pertinência de incluir mais mulheres negras na inovação e na tecnologia. <span>Plataforma que conecta mulheres negras que são ou gostariam de ser da tecnologia, por meio dos nossos ciclos formativos, rede de profissionais, mercado de trabalho, consultorias e estudos.</span></Typography>
        </Stack>
      </section>
      <section>
        <Stack>
          <Typography variant="h2" sx={{mt: 5, mb:10, alignItems:"center", color: "#be89cb"}}>Turma 2 | Ciclo Formativo Básico em Tecnológia</Typography>
          <img src="/pretalab.jpg"/>
        </Stack>
      
      </section>
    </main>
  );
}
    
export default SobrePretaLabPage;
import { Container, Links, Content } from './styles';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';



export function Details() {
  
  return(
    <Container>
      <Header/>

      <main>
        <Content>
         
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Pariatur corrupti asperiores quis deserunt quia vero error consectetur itaque sint eos! 
            Animi voluptatum blanditiis possimus voluptatem dolores ea amet pariatur iusto!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Pariatur corrupti asperiores quis deserunt quia vero error consectetur itaque sint eos! 
            Animi voluptatum blanditiis possimus voluptatem dolores ea amet pariatur iusto!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Pariatur corrupti asperiores quis deserunt quia vero error consectetur itaque sint eos!            
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">www.felipedev123.com</a></li>
              <li><a href="#">www.felipedev123.com</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>
          </Section>

          <Button title="Voltar"/>
        
        </Content>
      </main>
    </Container>
  );
}
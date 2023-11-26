## HTML5 e CSS3
 Processo de aprendizagem da linguagem HTTP junto ao CSS.
##

### Sites para visitar:

<a href="https://m4rrec0s.github.io/HTML5-e-CSS3/Prática/d010/pacote-projetod010/">Site Android</a> <br>
<a href="https://m4rrec0s.github.io/HTML5-e-CSS3/Calculadora/calculadora.html">Calculadora <strong>(win11)</strong></a>

## AULA 1:
* História da internet - guerra fria (1949)
* USA vs. URSS
* www e http
* Criação da linguagem HTML e criação do primeiro navegador

→ Funcionamento da Internet:

* Digitos binários
* Ondas quadradas
* Código UTF-8
* bit - byte - KB - MB - GB - TB - PB - EB - ZB - YB.....

## AULA 2:
→ Funcionamento da internet (pt2)
* DNS, IP e SERVIDORES
* Domínio e Hospedagem
* Enderoço URL
* Como ler um link

## AULA 3:
→ HTML, CSS E JAVASVRIPT

- **HTML: Linguagem de marcação hypertexto (conteúdo)**
   - texto, imagem, vídeo, tabelas...
- **CSS: Folhas de estilo em cascata (desing)**
   - cores, sombra, tamanhos, posicionamentos...

## AULA 4:
Conteúdo em HTML

```html
 <h1>Exemplo de título </h1>
 <img src ="foto.png" alt="Exemplo de foto">
 <p>Exemplo de parágrafo </p>
```

Estilo em CSS


```css
h1{
    font-family:Arial;
    font-size:20pt;
    color:blue;
}
```

Estrutura básica de Documento HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Primeiro exercício</title>
</head>
<body>
    <h1>Olá, Mundo!</h1>
    <p>Este é o meu primeiro documento em HTML! Estou muito feliz!
    </p>
    <p>Este momento é único! Estou criando um site de verdade!</p>
</body>
</html>
```

## Front-end e Back-end
O **front-end** e o **back-end** são duas camadas principais de um software. 

* O **front-end** é a camada do software que aparece na tela do nosso computador ou do nosso celular. Tudo que a gente consegue ver e interagir em um software faz parte da camada Front-end. O Front-end é a "capa" do software. 

* Já o **back-end** é a camada principal do software. Ele é o responsável em processar os dados e executar as ações que o software se propõe a fazer. O back-end é responsável por gerenciar o banco de dados, autenticação, segurança, lógica de negócios, etc.

O front-end não é design, mas sim a parte visual e interativa de um software, seja ele um site ou um aplicativo. O front-end é responsável por gerenciar a usabilidade, o design e a experiência do usuário.

## Semântica
O **HTML** está focado mais na semântica (sentido) do que na forma (aparência). Para mudar o estilo em geral do site utiliza-se o **CSS**.

## Imagens

```html
<img src=" lugar que a imagem está (online ou local) " alt=" texto que vai aparecer caso a imagem não carregue ">
```

## Listas

```html
<ol> /* lista ordenada */
     <li> Elemento da lista </li>
</ol>

<ul> /* lista não ordenada */
    <li> Elemento da lista </li>
```

## Desing
Como deixar um site lindão, harmonizando as cores com a <strong>Teoria das cores</strong> junto com o CSS:
##
<img align="left" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/RGB_color_wheel_24.svg/180px-RGB_color_wheel_24.svg.png" alt="circulo cromático">
<pre>
    * cores primárias
    * cores secundárias
    * cores terciárias
    * cores complementares
    * cores análogas
    * cores análogas relacionadas
    * [...]
</pre>

##

## Fontes
As fontes em CSS são usadas para definir o estilo, tamanho, peso e família das letras dos textos em HTML. Existem algumas propriedades CSS que podemos usar para modificar as fontes, como:

* <strong>font-family:</strong> define a família da fonte, que pode ser uma fonte específica (como Arial, Verdana, etc.) ou uma fonte genérica (como serif, sans-serif, etc.). Podemos usar uma lista de fontes separadas por vírgula para indicar uma ordem de preferência, caso a primeira não esteja disponível no computador do usuário.
font-style: define o estilo da fonte, que pode ser normal, italic ou oblique. Essa propriedade é usada para dar ênfase ou destaque a algum texto.
* <b>font-variant:</b> define a variante da fonte, que pode ser normal ou small-caps. Essa propriedade é usada para alterar o tamanho das letras minúsculas, fazendo-as parecer maiúsculas menores.
* <b>font-weight:</b> define o peso da fonte, que pode ser um valor numérico (de 100 a 900) ou um valor nominal (como normal, bold, lighter, etc.). Essa propriedade é usada para alterar a espessura das letras, fazendo-as parecer mais fortes ou mais fracas.
* <b>font-size:</b> define o tamanho da fonte, que pode ser um valor absoluto (como px, pt, cm, etc.) ou um valor relativo (como em, rem, %, etc.). Essa propriedade é usada para alterar o tamanho das letras, fazendo-as parecer maiores ou menores.
* <b>font:</b> define todas as propriedades anteriores em uma única declaração, seguindo uma ordem específica: font-style font-variant font-weight font-size/line-height font-family. Essa propriedade é usada para simplificar o código e evitar repetições.

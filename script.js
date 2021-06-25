var roteiro ="<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>";

//início de nomes das cidades avaliadas//
function cidade_um (){
    var cidadeUm = roteiro.substring(93,102);
    alert (cidadeUm);
}

function cidade_dois (){
    var cidadeDois = roteiro.substring(643,652);
    alert (cidadeDois);
}

function cidade_tres (){
    var cidadeTres = roteiro.substring(1281,1287);
    alert (cidadeTres);
}
//fim de nomes das cidades avaliadas//

//Início de conteúdo do roteiro A de cada cidade avaliada//
function cidade_um_roteiro_a (){
    var cidadeUmRoteiroA = roteiro.substring (397, 430);
    var conteudoRoteiroACidadeUm = cidadeUmRoteiroA.split (";");
    alert (conteudoRoteiroACidadeUm);
}

function cidade_dois_roteiro_a (){
    var cidadeDoisRoteiroA = roteiro.substring (984, 1039);
    var conteudoRoteiroACidadeDois = cidadeDoisRoteiroA.split (";");
    alert (conteudoRoteiroACidadeDois);
}

function cidade_tres_roteiro_a (){
    var cidadeTresRoteiroA = roteiro.substring (1509, 1579);
    var conteudoRoteiroACidadeTres = cidadeTresRoteiroA.split (";");
    alert (conteudoRoteiroACidadeTres);
}
//Fim de conteúdo do roteiro A de cada cidade avaliada//

function numero_cidade_um_roteiro_a (){
    var locaisRoteiroSp = ["MASP", "Parque Trianon", "Rua Augusta"];
    var  quantosLocais = locaisRoteiroSp.length;
    alert (quantosLocais);
}

function numero_cidade_dois_roteiro_a (){
    var locaisRoteiroLasVegas = ["Fonte do Bellagio", "Principais Cassinos", "Madame Tussauds"];
    var  quantosLocais = locaisRoteiroLasVegas.length;
    alert (quantosLocais);
}
//Fim de quantos locais são citados no roteiro A de cada cidade//

//Início de os nomes dos pontos turísticos localizados no bairro Centro da cidade de São Paulo//
function numero_cidade_tres_roteiro_a (){
    var locaisRoteiroMoscou = ["Museu Histórico do Estado",  "Catedral de São Basílico",  "Mausoléu de Lênin"];
    var  quantosLocais = locaisRoteiroMoscou.length;
    alert (quantosLocais);
}
//Fim de quantos locais são citados no roteiro A de cada cidade//

//Início de os nomes dos pontos turísticos localizados no bairro Centro da cidade de São Paulo//
function pontos_turisticos_centro_de_sp (){
    var pontosTuristicosCentro = roteiro.substring (465,510);
    var conteudoPontosTuristicosCentro = pontosTuristicosCentro.split (";");
    alert (conteudoPontosTuristicosCentro);
}
//Fim de os nomes dos pontos turísticos localizados no bairro Centro da cidade de São Paulo//

//Início de os nomes dos pontos turísticos localizados no bairro Downtown na cidade de Las Vegas//
function pontos_turisticos_downtown (){
    var pontosTuristicosDowntown = roteiro.substring (1077,1143);
    var conteudoPontosTuristicosDowntown = pontosTuristicosDowntown.split (";");
    alert (conteudoPontosTuristicosDowntown);
}
//Fim de os nomes dos pontos turísticos localizados no bairro Downtown na cidade de Las Vegas//
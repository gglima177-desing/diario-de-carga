/* Orientações de execução e boneco de músculos de cada exercício.
   Formato de cada linha: nome | principal | auxiliares | dicas separadas por ; | erro comum */
(function(){
var ML={pe:'Peitoral',da:'Ombro (frente)',dl:'Ombro (lateral)',dp:'Ombro (posterior)',bi:'Bíceps',an:'Antebraço',ab:'Abdômen',ob:'Oblíquos',qu:'Quadríceps',ad:'Adutores',pa:'Panturrilha',tp:'Trapézio',la:'Dorsais',ro:'Meio das costas',tr:'Tríceps',lo:'Lombar',gl:'Glúteos',gm:'Glúteo médio',po:'Posterior de coxa'};

/* ---------- boneco ---------- */
var BODY='M55 25L55 33C47 35 33 36 26 42C20 46 17 54 16 64L13 88C12 96 11 100 10 106L7 126C6 132 6 136 6 142L5 148C4 154 7 158 11 156L14 146L16 126C17 118 20 108 21 100L24 78C25 72 27 66 28 62C30 78 35 92 36 104L35 120C32 140 33 160 36 178L37 205C37 222 36 235 36 242L30 247L44 247L45 240C48 232 49 222 50 205L52 180C53 165 55 150 60 126M35 120C45 126 55 126 60 124';
var FR={ /* lado esquerdo da figura (espelhado para o direito); f = frente, b = costas */
 pe:{f:'M58 40C50 38 38 40 31 46C31 56 36 64 46 66C54 66 58 62 58 56Z'},
 da:{f:'M33 44C29 45 26 50 24 58C27 63 31 62 34 58Z',b:null},
 dl:{f:'M24 43C19 46 16 52 15 62C17 65 20 63 22 57C23 52 24 48 24 43Z',b:'M22 44C18 47 15 54 15 62C17 65 19 64 21 58C22 54 23 50 22 44Z'},
 dp:{b:'M31 44C27 46 24 52 23 60C26 64 30 62 32 56C33 52 32 48 31 44Z'},
 bi:{f:'M17 68C15 78 14 88 15 96L22 96C23 86 24 76 23 68Z'},
 tr:{b:'M17 68C15 78 14 88 15 96L22 96C23 86 24 76 23 68Z'},
 an:{f:'M14 108C11 118 9 128 8 138L14 140C16 130 18 120 20 108Z',b:'M14 108C11 118 9 128 8 138L14 140C16 130 18 120 20 108Z'},
 ab:{f:'M60 68L48 68C46 80 46 92 48 104L60 106Z'},
 ob:{f:'M46 68L38 72C36 84 36 96 38 106L46 104C44 92 44 80 46 68Z'},
 qu:{f:'M37 124C34 140 33 158 36 174L49 174C50 158 51 142 52 130C46 128 41 126 37 124Z'},
 ad:{f:'M52 130L58 127C57 146 55 160 51 172L50 172C51 158 51 142 52 130Z'},
 pa:{f:'M38 188C36 200 37 214 39 226L46 226C48 214 49 200 48 188Z',b:'M37 182C34 196 35 210 38 222L48 222C51 210 52 196 50 182Z'},
 tp:{b:'M60 28L55 30C48 35 38 38 30 43C36 50 46 56 60 68Z'},
 la:{b:'M31 66C31 82 38 96 47 104L60 106L60 76L46 76C40 72 36 70 31 66Z'},
 ro:{b:'M60 54C52 54 44 56 38 54C38 64 40 70 46 74C52 74 57 74 60 74Z'},
 lo:{b:'M59 86C54 86 49 88 47 92L47 108L59 110Z'},
 gl:{b:'M59 112C50 108 40 110 36 118C35 128 40 136 52 136C58 136 59 130 59 124Z'},
 gm:{b:'M36 108C40 103 48 103 55 106C53 114 45 120 36 122Z'},
 po:{b:'M37 138C35 150 35 164 37 176L51 176C53 164 54 150 54 138C48 140 42 140 37 138Z'}
};
function half(d,cls,fill){var m='<path class="'+cls+'" d="'+d+'"'+(fill?' style="'+fill+'"':'')+'/>';return m+'<path class="'+cls+'" d="'+d+'" transform="translate(120 0) scale(-1 1)"'+(fill?' style="'+fill+'"':'')+'/>'}
function view(v,P,A,x){
 var s='<g transform="translate('+x+' 0)">';
 Object.keys(FR).forEach(function(k){var d=FR[k][v];if(d)s+=half(d,'mz')});
 Object.keys(FR).forEach(function(k){var d=FR[k][v];if(!d)return;
  if(P.indexOf(k)>=0)s+=half(d,'mp');else if(A.indexOf(k)>=0)s+=half(d,'ma')});
 s+=half(BODY,'bo');
 s+=v==='f'?'<ellipse class="bo" cx="60" cy="15" rx="9" ry="11"/><path class="bo" d="M50 42L50 40M70 42L70 40" style="display:none"/>':'<ellipse class="bo" cx="60" cy="15" rx="9" ry="11"/><path class="bo" d="M60 28L60 100" style="opacity:.35"/>';
 return s+'</g>'}
function fig(P,A){
 return '<svg class="fig" viewBox="0 0 250 262" role="img" aria-label="Músculos trabalhados, de frente e de costas">'+view('f',P,A,0)+view('b',P,A,130)
  +'<text x="60" y="260" text-anchor="middle">Frente</text><text x="190" y="260" text-anchor="middle">Costas</text></svg>'}

/* ---------- conteúdo ---------- */
var RAW=[
/* PEITO */
'Supino inclinado com halteres|pe|da,tr|Banco a 30–45° para pegar a parte alta do peito;Escápulas juntas e para baixo, peito alto;Desça até a linha do peito e suba sem bater os halteres|Abrir demais os cotovelos e jogar a carga no ombro',
'Supino reto na máquina|pe|da,tr|Ajuste o banco para as pegadas ficarem na altura do meio do peito;Costas coladas no encosto, escápulas firmes;Empurre sem travar os cotovelos no topo|Tirar as costas do encosto para ganhar impulso',
'Supino declinado na polia|pe|da,tr|Tronco levemente inclinado à frente e escápulas fixas;Empurre as mãos à frente e para baixo, rumo à parte baixa do peito;Volte devagar, controlando a polia|Deixar os ombros subirem em direção às orelhas',
'Crucifixo|pe|da|Cotovelos levemente dobrados e fixos o tempo todo;Abra até sentir o peito alongar, sem passar da linha do ombro;Feche como se abraçasse uma árvore|Dobrar e esticar os cotovelos, virando um supino',
'Supino reto com halteres|pe|da,tr|Halteres alinhados com o meio do peito, punhos retos;Escápulas juntas e pés firmes no chão;Suba juntando os halteres sem bater um no outro|Descer rápido demais e perder o controle no fundo',
'Crucifixo na polia|pe|da|Dê um passo à frente para manter tensão no cabo;Cotovelos levemente dobrados e fixos;Junte as mãos à frente do peito apertando o músculo|Usar o tronco para arremessar a carga',
'Supino reto com barra|pe|da,tr|Barra desce na linha do mamilo, antebraços na vertical;Escápulas juntas, peito alto e pés firmes;Cotovelos a cerca de 45° do tronco|Quicar a barra no peito ou levantar o quadril do banco',
'Supino inclinado com barra|pe|da,tr|Banco a 30–45°; barra desce na parte alta do peito;Escápulas juntas e peito alto;Suba em linha reta sem perder a posição dos ombros|Banco muito inclinado: vira exercício de ombro',
'Supino inclinado na máquina|pe|da,tr|Ajuste o banco para as pegadas ficarem na altura da parte alta do peito;Costas coladas e escápulas firmes;Empurre até quase esticar, sem travar os cotovelos|Encolher os ombros durante o empurrão',
'Supino declinado com barra|pe|da,tr|Prenda bem os pés no apoio;Barra desce na parte baixa do peito, com controle;Escápulas juntas e punhos alinhados|Usar carga alta sem ajudante e perder o controle',
'Supino declinado com halteres|pe|da,tr|Banco levemente declinado, pés presos;Desça até a linha do peito, cotovelos a 45°;Suba juntando os halteres sem bater|Abrir demais os cotovelos',
'Supino declinado na máquina|pe|da,tr|Ajuste o assento para empurrar na altura da parte baixa do peito;Costas apoiadas e escápulas fixas;Volte devagar, sem soltar o peso|Deixar os ombros subirem',
'Supino reto na polia|pe|da,tr|Banco no meio das polias, escápulas fixas;Empurre as mãos à frente do peito, sem travar os cotovelos;Controle a volta mantendo o peito alto|Puxar o tronco para a frente para ajudar',
'Crucifixo na máquina (peck deck)|pe|da|Assento na altura em que os cotovelos ficam na linha do peito;Peito alto, escápulas juntas;Feche apertando o peito e volte devagar|Usar carga demais e fechar com os ombros à frente',
'Crucifixo inclinado com halteres|pe|da|Banco a 30°; cotovelos levemente dobrados;Abra até alongar a parte alta do peito, sem passar do ombro;Feche em arco, como um abraço|Descer demais e sobrecarregar o ombro',
'Crucifixo na polia baixa|pe|da|Cabos embaixo, tronco levemente inclinado;Suba as mãos em arco até a altura do queixo;Aperte a parte alta do peito no final|Dobrar muito os cotovelos e virar uma rosca',
'Crossover na polia alta|pe|da|Cabos no alto, um passo à frente e tronco levemente inclinado;Cotovelos levemente dobrados, desça as mãos em arco;Cruze as mãos à frente do quadril apertando o peito|Mover o tronco para frente e para trás',
'Crossover na polia média|pe|da|Cabos na altura do ombro, peito aberto;Junte as mãos à frente do esterno;Segure um instante contraindo o peito|Dobrar e esticar os cotovelos',
'Flexão de braço|pe|da,tr,ab|Mãos um pouco mais abertas que os ombros, corpo em prancha;Desça até o peito quase tocar o chão;Abdômen e glúteos firmes|Deixar o quadril cair ou subir demais',
'Mergulho nas paralelas (peito)|pe|tr,da|Incline o tronco à frente e abra um pouco os cotovelos;Desça até ~90° nos cotovelos, sem forçar o ombro;Suba sem travar os cotovelos|Descer fundo demais, o que sobrecarrega o ombro',
'Pullover com halter (peito)|pe|la,tr|Deitado, halter seguro com as duas mãos sobre o peito;Desça atrás da cabeça com cotovelos levemente dobrados;Volte em arco, contraindo o peito|Dobrar os cotovelos e transformar em tríceps',
/* COSTAS */
'Puxada alta|la|bi,ro,tp|Pegada um pouco mais aberta que os ombros;Peito alto, puxe a barra até a altura da clavícula;Pense em levar os cotovelos para baixo e para trás|Jogar o tronco para trás e puxar com os braços',
'Remada|la,ro|bi,dp,tp|Tronco firme, peito alto e coluna neutra;Puxe os cotovelos para trás, juntando as escápulas;Volte devagar até alongar as costas|Balançar o tronco para tirar a carga do lugar',
'Remada unilateral ou baixa|la,ro|bi,dp|Apoie bem o corpo e mantenha a coluna neutra;Puxe o cotovelo rente ao corpo até a linha do quadril;Pause um instante e volte devagar|Girar o tronco para ajudar a puxar',
'Pullover na polia|la|tr,pe|Braços quase esticados, tronco levemente inclinado;Desça as mãos em arco até as coxas, cotovelos fixos;Sinta o dorsal alongar na volta|Dobrar os cotovelos e puxar com o tríceps',
'Barra fixa pegada aberta|la|bi,ro,tp|Comece pendurado, ombros longe das orelhas;Suba o peito em direção à barra, cotovelos para baixo;Desça até quase esticar os braços|Balançar o corpo e subir só até o queixo',
'Barra fixa supinada|la|bi,ro|Mãos na largura dos ombros, palmas para você;Suba até o queixo passar da barra, peito alto;Desça controlado até esticar quase por completo|Meia repetição, sem descer completamente',
'Puxada pela frente pegada aberta|la|bi,ro,tp|Segure aberto, polegar junto aos dedos;Peito alto e levemente inclinado para trás;Puxe a barra até a clavícula|Puxar a barra atrás da nuca',
'Puxada supinada|la|bi|Mãos na largura dos ombros, palmas para você;Cotovelos descem rente ao corpo;Controle a subida até alongar o dorsal|Jogar o tronco para trás',
'Puxada com triângulo|la|bi,ro|Pegada neutra (palmas frente a frente);Peito alto e cotovelos rente ao corpo;Leve o triângulo até a parte alta do abdômen|Encurtar o movimento e puxar só com os braços',
'Puxada unilateral na polia|la|bi,ro|Sente firme e puxe um braço por vez;Cotovelo desce rente ao corpo;Volte devagar, alongando o dorsal|Girar o tronco para ajudar',
'Pulldown com braços estendidos|la|tr|Braços quase retos, tronco levemente inclinado;Desça a barra em arco até as coxas;Mantenha o abdômen firme|Dobrar os cotovelos e puxar com o tríceps',
'Remada curvada com barra|la,ro|bi,dp,lo,tp|Tronco inclinado ~45°, coluna neutra e joelhos flexionados;Puxe a barra até a parte baixa do abdômen;Cotovelos para trás, rente ao corpo|Arredondar a lombar ou usar impulso do tronco',
'Remada Pendlay|la,ro|bi,dp,lo|Tronco paralelo ao chão, coluna neutra;Cada repetição parte da barra parada no chão;Puxe rápido e controle a descida|Subir o tronco para ajudar',
'Remada cavalinho (barra T)|la,ro|bi,dp,lo|Tronco inclinado e coluna neutra;Puxe levando os cotovelos para trás, rente ao corpo;Aperte as escápulas no topo|Arredondar as costas',
'Remada sentada na máquina|la,ro|bi,dp|Peito apoiado e ombros longe das orelhas;Puxe os cotovelos para trás juntando as escápulas;Volte devagar, alongando as costas|Puxar com o pescoço e os ombros',
'Remada baixa com triângulo|la,ro|bi,dp|Joelhos levemente dobrados e coluna neutra;Puxe o triângulo até o abdômen, cotovelos rente ao corpo;Volte alongando sem arredondar as costas|Balançar o tronco para frente e para trás',
'Remada serrote (unilateral com halter)|la,ro|bi,dp|Apoie joelho e mão no banco, coluna neutra;Puxe o halter em direção ao quadril, cotovelo junto ao corpo;Desça até alongar sem girar o tronco|Girar o tronco para subir mais carga',
'Remada unilateral na polia|la,ro|bi,dp|Coluna neutra e tronco estável;Puxe o cotovelo para trás, rente ao corpo;Controle a volta, alongando o dorsal|Rodar o corpo junto com a puxada',
'Remada na máquina articulada|la,ro|bi,dp|Peito apoiado no suporte, ombros baixos;Puxe até as escápulas se juntarem;Volte devagar sem soltar a carga|Encolher os ombros ao puxar',
'Remada alta na polia|ro,tp|dp,bi|Puxe a corda em direção ao rosto, cotovelos altos;Escápulas juntas no final;Mantenha o tronco firme|Usar o corpo para arremessar a carga',
'Pullover com halter (costas)|la|pe,tr|Deitado, halter com as duas mãos acima do peito;Desça atrás da cabeça, cotovelos levemente dobrados;Volte em arco sentindo o dorsal|Arquear a lombar demais na descida',
'Encolhimento com halteres|tp|an,ro|Braços estendidos ao lado do corpo;Suba os ombros em direção às orelhas, sem girar;Segure um instante no alto e desça devagar|Fazer círculos com os ombros',
'Encolhimento com barra|tp|an,ro|Barra na frente do corpo, braços retos;Suba os ombros direto para cima;Segure um instante e desça controlado|Dobrar os cotovelos para ajudar',
'Remada iso-lateral na máquina de anilhas|la,ro|bi,dp,tp|Ajuste o assento para as manoplas ficarem na altura do meio do peito;Cada braço trabalha de forma independente: puxe os cotovelos para trás, rente ao corpo;Aperte as escápulas no final e volte devagar, alongando as costas|Girar o tronco para ajudar o lado mais fraco',
'Remada linear na máquina de anilhas|la,ro|bi,dp,tp|Apoie o peito na almofada e firme os pés na plataforma;Puxe as manoplas levando os cotovelos em direção ao quadril;Junte as escápulas no final e volte devagar, sem soltar a carga|Tirar o peito da almofada e usar impulso do tronco',
/* QUADRÍCEPS */
'Agachamento no Smith|qu|gl,ad|Pés um pouco à frente da barra, costas apoiadas na posição neutra;Desça até as coxas ficarem pelo menos paralelas ao chão;Joelhos acompanham a direção dos pés|Deixar os calcanhares saírem do chão',
'Leg 45|qu|gl,ad|Pés na largura dos ombros, costas e quadril apoiados;Desça até ~90° nos joelhos sem o quadril descolar;Empurre pelo meio do pé, sem travar os joelhos|Deixar o quadril levantar do banco no fundo',
'Rack|qu|gl,ad,lo|Barra apoiada na parte alta das costas, abdômen firme;Desça controlado com joelhos na direção dos pés;Suba empurrando o chão com o pé inteiro|Deixar os joelhos caírem para dentro',
'Cadeira extensora|qu||Ajuste o encosto para o joelho ficar alinhado ao eixo;Suba sem balançar o corpo e aperte o quadríceps no topo;Desça devagar, sem deixar o peso bater|Usar impulso para subir a carga',
'Agachamento livre|qu,gl|ad,lo,ab|Barra apoiada nas costas, abdômen firme, olhar à frente;Desça até pelo menos a paralela, joelhos alinhados com os pés;Suba empurrando o chão com o pé inteiro|Arredondar a lombar no fundo ou deixar os joelhos caírem para dentro',
'Agachamento frontal|qu|gl,ab,lo|Barra apoiada à frente dos ombros, cotovelos altos;Tronco bem vertical durante todo o movimento;Desça até a paralela ou mais|Deixar os cotovelos caírem e o tronco tombar',
'Agachamento hack|qu|gl,ad|Costas apoiadas no encosto da máquina;Pés na largura dos ombros, desça até ~90° ou mais;Empurre pelo meio do pé sem travar os joelhos|Descer pouco ou levantar o calcanhar',
'Agachamento búlgaro|qu,gl|ad,po|Pé de trás apoiado no banco, tronco levemente inclinado;Desça controlado até o joelho da frente formar ~90°;Empurre pelo calcanhar da perna da frente|Apoiar o peso na perna de trás',
'Agachamento sumô|ad,qu|gl|Pés bem abertos, pontas levemente para fora;Desça mantendo o tronco ereto e joelhos na direção dos pés;Suba apertando o glúteo|Deixar os joelhos fecharem',
'Agachamento goblet|qu|gl,ab|Halter junto ao peito, cotovelos apontando para baixo;Desça com o tronco ereto, calcanhares no chão;Suba empurrando o chão|Inclinar o tronco à frente',
'Agachamento pendular|qu|gl,po,pa|Ombros sob as almofadas, costas apoiadas e pés um pouco à frente na plataforma;Desça em arco, joelhos na direção dos pés, até ~90° ou mais, sem o quadril descolar;Empurre pelo meio do pé até quase esticar, sem travar os joelhos|Deixar o calcanhar levantar ou os joelhos caírem para dentro',
'Agachamento em V (V-squat)|qu,gl|po,pa,ad|Ombros sob as almofadas e tronco firme no apoio;Pés na largura dos ombros, pontas levemente para fora e joelhos na direção dos pés;Desça controlado até ~90° e suba empurrando pelos calcanhares, apertando o glúteo no topo, sem travar os joelhos|Deixar os joelhos fecharem ou tirar os calcanhares da plataforma',
'Leg press horizontal|qu|gl,ad|Costas e quadril colados no encosto;Desça até ~90° sem o quadril descolar;Empurre pelo meio do pé, sem travar os joelhos|Levantar o quadril no fundo da descida',
'Leg press 45° unilateral|qu|gl|Um pé por vez, quadril encostado e reto;Desça até ~90° mantendo o joelho alinhado ao pé;Empurre sem travar o joelho|Deixar o joelho cair para dentro',
'Afundo com halteres|qu,gl|ad,po|Passo largo, tronco ereto e olhar à frente;Desça até os dois joelhos formarem ~90°;Empurre pelo calcanhar da perna da frente|Passo curto demais, levando o joelho muito à frente',
'Passada andando|qu,gl|ad,po|Passos amplos, tronco ereto;Joelho de trás quase toca o chão;Empurre pelo calcanhar e alterne as pernas|Passos curtos e tronco inclinado',
'Avanço no Smith|qu,gl|ad|Pé da frente adiantado, barra apoiada nas costas;Desça reto até ~90° nos joelhos;Empurre pelo calcanhar da perna da frente|Joelho da frente passar muito dos pés',
'Cadeira extensora unilateral|qu||Uma perna por vez, ajuste o encosto ao joelho;Suba sem balançar e aperte o quadríceps no topo;Desça devagar|Girar o quadril para ajudar',
'Subida no banco (step-up)|qu,gl|po,ad|Pé inteiro apoiado no banco, banco na altura do joelho;Suba empurrando só com a perna da frente;Desça controlado, sem se jogar|Empurrar com a perna de trás',
'Sissy squat|qu||Apoie uma mão para equilibrar-se;Dobre os joelhos para a frente, inclinando o tronco para trás;Desça até onde conseguir controlar|Forçar o joelho com carga e amplitude demais',
/* POSTERIOR */
'Cadeira flexora|po|pa|Ajuste o encosto e o apoio dos tornozelos;Flexione os joelhos sem tirar o quadril do banco;Volte devagar, alongando o posterior|Levantar o quadril para ajudar',
'Mesa flexora|po|pa,gl|Quadril colado no banco, joelhos alinhados ao eixo;Curve até o calcanhar se aproximar do glúteo;Desça devagar, sem soltar o peso|Levantar o quadril ao final do movimento',
'Flexora unilateral|po|pa|Uma perna por vez, quadril firme;Flexione sem balançar o corpo;Desça lentamente, alongando o posterior|Usar impulso do quadril',
'Stiff|po,gl|lo|Joelhos levemente flexionados e coluna neutra;Leve o quadril para trás, deslizando a barra rente às pernas;Desça até alongar o posterior e volte apertando o glúteo|Arredondar a lombar ou dobrar os joelhos como se agachasse',
'Elevação lateral na polia|dl|tp|Cabo na altura do quadril, ombro afastado das orelhas;Suba o braço de lado até a altura do ombro;Desça devagar mantendo a tensão do cabo|Subir demais e encolher o ombro',
'Elevação lateral na máquina|dl|tp|Ajuste o assento: eixo da máquina alinhado ao ombro;Empurre os cotovelos para o lado, sem encolher;Volte devagar|Usar o tronco para ajudar',
'Elevação lateral com halter|dl|tp|Tronco levemente inclinado para a frente, cotovelo ligeiramente dobrado;Suba como se despejasse uma jarra de água, até a altura do ombro;Desça devagar|Balançar o corpo para subir',
'Elevação lateral|dl|tp|Braços ao lado do corpo, cotovelos levemente flexionados;Suba até a altura do ombro, cotovelos mais altos que as mãos;Desça controlado|Encolher os ombros e usar impulso',
'Crucifixo inverso|dp|ro,tp|Tronco inclinado à frente ou peito apoiado, coluna neutra;Abra os braços em arco, cotovelos levemente dobrados;Aperte as escápulas no final|Puxar com as costas em vez do ombro posterior',
'Desenvolvimento|da,dl|tr,tp|Cotovelos um pouco à frente do corpo, antebraços verticais;Empurre até quase esticar, sem arquear a lombar;Desça até a linha do queixo ou das orelhas|Arquear as costas e empurrar o peso para trás da cabeça',
'Rosca inclinada com halteres|bi||Banco inclinado a 45°, braços soltos para trás;Cotovelos fixos e para baixo, sem balançar;Desça até alongar totalmente o bíceps|Jogar os cotovelos para a frente',
'Rosca Scott ou na polia|bi|an|Axilas apoiadas no banco, braços relaxados sobre o apoio;Suba sem tirar o braço do apoio e aperte o bíceps;Desça devagar até quase esticar|Levantar o ombro ou perder o apoio no fim da descida',
'Rosca martelo|bi,an||Palmas voltadas uma para a outra o tempo todo;Cotovelos fixos ao lado do corpo;Suba e desça sem balançar|Balançar o tronco para ajudar',
'Rosca direta|bi|an|Pés firmes, cotovelos rente ao corpo;Suba a barra sem jogar o tronco para trás;Desça devagar até esticar quase por completo|Balançar o corpo e jogar os cotovelos à frente',
'Rosca alternada|bi|an|Cotovelos fixos, um braço por vez;Gire o punho ao subir, palma para cima no topo;Desça devagar até esticar|Usar impulso do tronco',
'Tríceps francês na corda|tr||Cotovelos apontando para cima e fixos;Estenda os braços abrindo a corda ao final;Volte devagar, sem soltar os cotovelos|Abrir os cotovelos ou deixar o tronco balançar',
'Tríceps testa na corda|tr||Cotovelos apontando para o teto, fixos;Estenda os braços sem mover o ombro;Desça controlando até a altura da testa|Mover os cotovelos para frente e para trás',
'Tríceps barra na polia|tr||Cotovelos junto ao corpo e fixos;Estenda os braços sem arquear as costas;Volte devagar até ~90°|Inclinar o corpo para usar o peso',
'Cadeira abdutora|gm|gl|Costas encostadas, quadril firme no banco;Abra as pernas com controle, sem impulso;Volte devagar sem soltar o peso|Usar impulso e deixar o peso bater',
'Abdominal na máquina|ab|ob|Ajuste o assento e segure firme;Encurte o abdômen aproximando as costelas do quadril;Volte devagar sem soltar o peso|Puxar com os braços ou com o pescoço',
/* POSTERIOR (extras) */
'Stiff com barra|po,gl|lo|Joelhos levemente flexionados e coluna neutra;Leve o quadril para trás, deslizando a barra rente às pernas;Desça até alongar o posterior e suba apertando o glúteo|Arredondar a lombar ou agachar em vez de dobrar o quadril',
'Stiff com halteres|po,gl|lo|Halteres rente às coxas, coluna neutra;Quadril vai para trás, joelhos levemente flexionados;Volte apertando o glúteo|Arredondar as costas',
'Stiff unilateral|po,gl|lo|Uma perna de apoio, quadril alinhado;Incline o tronco e estenda a outra perna para trás;Volte apertando o glúteo|Girar o quadril na descida',
'Stiff no Smith|po,gl|lo|Pés levemente à frente da barra, coluna neutra;Quadril para trás, barra rente às pernas;Volte apertando o glúteo|Arredondar a lombar para descer mais',
'Flexora unilateral em pé|po|gl,pa|Apoie-se na máquina, quadril alinhado;Flexione a perna sem balançar o corpo;Desça devagar, alongando o posterior|Usar impulso do tronco e do quadril',
'Flexora em pé na máquina|po|gl,pa|Apoie bem o tronco e mantenha o quadril firme;Dobre o joelho até o calcanhar se aproximar do glúteo;Controle a volta|Arquear a lombar para levantar a carga',
'Flexora na polia|po|gl,pa|Caneleira no tornozelo, apoie-se firme;Flexione o joelho sem mexer o quadril;Controle a volta|Balançar o corpo',
'Mesa flexora unilateral|po|pa|Uma perna por vez, quadril colado no banco;Curve até o calcanhar se aproximar do glúteo;Desça devagar|Levantar o quadril',
'Cadeira flexora unilateral|po|pa|Ajuste o encosto e o apoio do tornozelo;Flexione o joelho com uma perna por vez;Volte devagar|Girar o quadril para ajudar',
'Levantamento terra convencional|po,gl,lo|qu,tp,la,an|Barra rente às pernas, coluna neutra e peito aberto;Empurre o chão e estenda quadril e joelhos juntos;Termine em pé, sem arquear a lombar|Arredondar a lombar ou puxar a barra com os braços',
'Levantamento terra romeno|po,gl|lo|Joelhos levemente flexionados, barra rente às pernas;Quadril para trás até alongar o posterior;Volte apertando o glúteo|Descer a barra até o chão perdendo a coluna neutra',
'Levantamento terra sumô|gl,ad,po|qu,lo|Pés bem abertos, pontas para fora;Peito aberto, coluna neutra, barra rente ao corpo;Empurre o chão e termine apertando o glúteo|Deixar o quadril subir antes do peito',
'Bom dia (good morning)|po,lo|gl|Barra nas costas, joelhos levemente flexionados;Incline o tronco levando o quadril para trás, coluna neutra;Volte apertando o glúteo|Arredondar a coluna ou usar carga excessiva',
'Elevação pélvica com barra|gl|po|Costas apoiadas no banco, barra sobre o quadril;Suba o quadril até alinhar com os joelhos;Aperte o glúteo no topo|Arquear demais a lombar no topo',
'Elevação pélvica na máquina|gl|po|Costas firmes no apoio, pés na largura do quadril;Suba empurrando pelos calcanhares;Aperte o glúteo no topo|Subir com a lombar em vez do glúteo',
'Extensão de quadril na polia|gl|po,lo|Caneleira no tornozelo, tronco firme;Leve a perna para trás sem arquear a lombar;Aperte o glúteo no final|Arquear a lombar para subir mais',
'Glúteo na máquina (coice)|gl|po|Apoie o tronco e mantenha a lombar neutra;Empurre a perna para trás apertando o glúteo;Volte devagar|Usar impulso do corpo',
'Hiperextensão lombar|lo,gl|po|Quadril apoiado, tronco em linha reta ao subir;Desça até alongar sem arredondar demais;Suba apertando glúteo e lombar|Subir além da linha reta, arqueando a lombar',
'Mesa flexora nórdica (nordic curl)|po|gl|Joelhos apoiados e pés presos;Desça o tronco o mais devagar possível mantendo o quadril firme;Use as mãos para ajudar na volta|Dobrar no quadril em vez de manter o corpo alinhado',
/* OMBROS */
'Elevação lateral sentado com halteres|dl|tp|Sentado, tronco firme e ereto;Suba os braços até a altura dos ombros;Desça devagar|Balançar o tronco para ajudar',
'Elevação lateral unilateral na polia|dl|tp|Cabo cruzando o corpo, ombro afastado das orelhas;Suba até a altura do ombro, cotovelo levemente dobrado;Desça devagar mantendo tensão|Encolher o ombro e inclinar o tronco',
'Elevação lateral deitado de lado|dl||Deitado de lado em banco inclinado, halter na mão de cima;Suba o braço em arco até a altura do ombro;Desça devagar|Usar impulso do tronco',
'Elevação lateral por trás na polia|dl|dp|Cabo atrás do corpo, ombro baixo;Suba o braço de lado até a altura do ombro;Desça controlado|Encolher o ombro',
'Remada alta pegada aberta|dl,tp|bi,dp|Pegada um pouco mais aberta que os ombros;Suba os cotovelos acima das mãos até a altura do peito;Desça devagar|Subir a barra além da altura do peito',
'Crucifixo inverso na máquina|dp|ro,tp|Peito apoiado, ombros longe das orelhas;Abra os braços para trás em arco;Aperte as escápulas no final|Puxar com o tronco, não com o ombro',
'Crucifixo inverso com halteres|dp|ro,tp|Tronco inclinado, coluna neutra;Cotovelos levemente dobrados, abra em arco;Controle a volta|Balançar o tronco para subir os halteres',
'Crucifixo inverso na polia|dp|ro|Cabos cruzados, cotovelos levemente dobrados;Abra os braços para trás, ao nível do ombro;Controle a volta|Puxar o tronco junto',
'Face pull na corda|dp,ro|tp,bi|Corda na altura do rosto, cotovelos altos;Puxe a corda em direção às orelhas, abrindo as mãos;Aperte as escápulas no final|Puxar com os braços e encolher os ombros',
'Elevação posterior unilateral na polia|dp|ro|Cabo cruzando o corpo, tronco firme;Abra o braço para trás ao nível do ombro;Controle a volta|Girar o tronco para ajudar',
'Desenvolvimento com halteres|da,dl|tr,tp|Halteres na altura dos ombros, antebraços verticais;Empurre para cima sem arquear a lombar;Desça até a linha das orelhas|Arquear as costas para empurrar mais carga',
'Desenvolvimento com barra|da,dl|tr,tp|Barra na altura da clavícula, abdômen firme;Empurre em linha reta, a cabeça passa à frente da barra no topo;Desça controlado|Arquear a lombar e usar impulso das pernas',
'Desenvolvimento na máquina|da,dl|tr|Ajuste o assento: pegadas na altura dos ombros;Empurre sem travar os cotovelos no topo;Volte devagar|Subir os ombros em direção às orelhas',
'Desenvolvimento no Smith|da,dl|tr,tp|Banco com encosto, barra na altura do queixo;Empurre em linha reta sem arquear a lombar;Desça até o queixo|Descer a barra atrás da cabeça',
'Desenvolvimento Arnold|da,dl|tr|Comece com as palmas voltadas para você, na altura do peito;Gire as palmas para a frente enquanto empurra para cima;Desça girando de volta, com controle|Usar impulso e arquear as costas',
'Elevação frontal com halteres|da|dl,pe|Braços à frente, cotovelos levemente dobrados;Suba até a altura dos ombros, sem balançar;Desça devagar|Usar impulso do corpo',
'Elevação frontal na polia|da|dl|Cabo na frente, tronco ereto;Suba até a altura dos ombros;Desça controlado|Inclinar o tronco para trás',
'Elevação frontal com anilha|da|dl,pe|Anilha segura com as duas mãos, braços quase retos;Suba até a altura dos olhos;Desça devagar|Balançar o corpo',
/* BÍCEPS */
'Rosca direta com barra W|bi|an|Cotovelos rente ao corpo, pegada na parte curva da barra;Suba sem balançar o tronco;Desça devagar até esticar quase por completo|Jogar os cotovelos para a frente',
'Rosca na polia baixa|bi|an|Cotovelos fixos ao lado do corpo;Suba apertando o bíceps no topo;Volte controlando|Inclinar o tronco para trás',
'Rosca concentrada|bi||Sentado, cotovelo apoiado na parte interna da coxa;Suba o halter girando o punho no final;Desça devagar até esticar|Mover o ombro para ajudar',
'Rosca Scott com halteres|bi|an|Axilas apoiadas, braço relaxado sobre o apoio;Suba sem tirar o braço do apoio;Desça devagar|Descer rápido no fim e sobrecarregar o cotovelo',
'Rosca Scott na máquina|bi|an|Ajuste o assento: axilas apoiadas no topo do apoio;Suba apertando o bíceps no topo;Desça devagar até quase esticar|Levantar o ombro para completar a repetição',
'Rosca martelo na corda|bi,an||Corda na polia baixa, palmas voltadas uma para a outra;Cotovelos fixos ao lado do corpo;Suba apertando o bíceps|Balançar o tronco',
'Rosca martelo alternada|bi,an||Palmas uma para a outra o tempo todo;Cotovelos fixos, um braço por vez;Desça devagar|Usar impulso do corpo',
'Rosca inversa|an,bi||Pegada por cima (pronada);Cotovelos fixos ao lado do corpo;Desça devagar|Dobrar os punhos para ajudar',
'Rosca inclinada na polia|bi||Banco inclinado, cabo atrás de você;Cotovelos fixos e para baixo;Alongue bem na descida|Jogar os cotovelos para frente',
'Rosca spider|bi||Peito apoiado no banco inclinado, braços soltos à frente;Suba apertando o bíceps no topo;Desça devagar|Usar impulso',
'Rosca bayesian na polia|bi||De costas para o cabo, braço atrás do corpo;Suba o antebraço mantendo o cotovelo fixo;Alongue bem na descida|Mover o ombro para ajudar',
/* TRÍCEPS */
'Tríceps testa com barra W|tr||Cotovelos apontando para o teto e fixos;Desça a barra até perto da testa;Estenda os braços sem mover os ombros|Abrir os cotovelos ou deixar o peso cair',
'Tríceps testa com halteres|tr||Halteres sobre o peito, cotovelos fixos;Desça controlado até a altura das orelhas;Estenda sem balançar os ombros|Abrir os cotovelos',
'Tríceps pulley com corda|tr||Cotovelos junto ao corpo e fixos;Estenda os braços abrindo a corda no final;Volte devagar até ~90°|Inclinar o corpo para usar o peso',
'Tríceps pulley com barra reta|tr||Cotovelos junto ao corpo e fixos;Estenda os braços até esticar;Volte devagar|Subir os cotovelos ao retornar',
'Tríceps pulley pegada supinada|tr||Pegada por baixo, cotovelos junto ao corpo;Estenda sem mover os ombros;Volte devagar|Levantar os cotovelos para ajudar',
'Tríceps francês com halter|tr||Halter acima da cabeça, cotovelos apontando para cima;Desça atrás da cabeça controlado;Estenda sem abrir os cotovelos|Arquear a lombar e abrir os cotovelos',
'Tríceps coice com halter|tr||Tronco inclinado, braço junto ao corpo;Estenda o antebraço para trás, apertando o tríceps;Volte devagar|Mover o ombro e balançar o halter',
'Tríceps unilateral na polia|tr||Cotovelo fixo ao lado do corpo;Estenda até esticar o braço;Volte devagar|Afastar o cotovelo do corpo',
'Mergulho no banco|tr|da,pe|Mãos no banco, quadril próximo a ele;Desça até ~90° nos cotovelos;Suba sem travar|Descer fundo demais, sobrecarregando o ombro',
'Mergulho nas paralelas (tríceps)|tr|pe,da|Tronco ereto e cotovelos junto ao corpo;Desça até ~90° nos cotovelos;Suba sem travar|Inclinar o corpo à frente e virar exercício de peito',
'Supino fechado|tr|pe,da|Pegada na largura dos ombros, cotovelos rente ao corpo;Barra desce na parte baixa do peito;Suba empurrando com o tríceps|Pegada estreita demais, que sobrecarrega o punho',
/* PANTURRILHA */
'Panturrilha em pé|pa||Pontas dos pés na plataforma, joelhos estendidos (sem travar);Desça o calcanhar além da plataforma para alongar bem;Suba o máximo possível e segure 1 segundo no topo|Fazer repetições curtas e rápidas, sem alongar embaixo',
'Panturrilha sentada|pa||Joelhos a ~90° e apoio firme sobre as coxas;Desça o calcanhar até alongar e suba o máximo, com pausa no topo;Movimento lento e completo|Usar impulso e pouca amplitude',
'Panturrilha no leg press|pa||Apoie só a ponta dos pés na parte baixa da plataforma, joelhos quase estendidos;Empurre com as pontas e volte alongando a panturrilha;Mantenha os joelhos fixos|Dobrar e esticar os joelhos em vez de mover o tornozelo',
'Panturrilha em pé no Smith|pa||Ponta dos pés sobre um degrau, barra apoiada nos ombros;Desça o calcanhar alongando e suba o máximo;Segure 1 segundo no topo|Balançar o corpo para subir',
'Panturrilha em pé unilateral|pa||Uma perna por vez, apoie a mão para equilibrar-se;Desça alongando o calcanhar e suba o máximo;Movimento lento e controlado|Usar a perna livre para ajudar',
'Panturrilha burro (donkey)|pa||Quadril dobrado e apoiado, joelhos estendidos;Alongue embaixo e suba nas pontas dos pés;Segure um instante no topo|Fazer amplitude curta',
'Panturrilha em pé com halteres|pa||Halteres ao lado do corpo, ponta dos pés num degrau;Desça alongando e suba o máximo;Pausa de 1 segundo no topo|Balançar o tronco para ajudar',
/* ABDUTORES */
'Abdução de quadril na polia|gm|gl|Caneleira, apoie-se firme;Leve a perna para o lado sem girar o quadril;Volte devagar|Inclinar o tronco para o lado',
'Abdução em pé com caneleira|gm|gl|Tronco ereto, apoie-se em algo;Leve a perna para o lado, sem balançar o corpo;Controle a volta|Inclinar o tronco',
'Abdução deitado de lado|gm|gl|Deitado de lado, corpo em linha reta;Suba a perna de cima sem girar o quadril;Desça devagar|Rodar o quadril para trás',
'Abdutora com tronco inclinado|gm,gl||Incline o tronco levemente à frente;Abra as pernas com controle;Volte devagar|Usar impulso do quadril',
/* ABDÔMEN */
'Abdominal supra no solo|ab|ob|Mãos junto às orelhas, sem puxar o pescoço;Suba as costelas em direção ao quadril;Desça devagar sem relaxar|Puxar o pescoço com as mãos',
'Abdominal infra (elevação de pernas)|ab|ob|Quadril apoiado, lombar colada no chão;Suba as pernas até ~90°;Desça devagar sem arquear a lombar|Deixar a lombar descolar do chão',
'Elevação de pernas na barra|ab|ob,an|Pendurado, ombros baixos;Suba as pernas dobrando o quadril, sem balançar;Desça devagar|Balançar o corpo para subir',
'Abdominal na polia (corda)|ab|ob|De joelhos, corda junto à cabeça;Curve o tronco aproximando costelas e quadril;Volte devagar|Puxar com os braços ou o quadril',
'Abdominal oblíquo na polia|ob|ab|Cabo na altura do ombro, pés firmes;Gire e incline o tronco de lado;Volte controlado|Balançar o corpo para ajudar',
'Abdominal declinado|ab|ob|Pés presos, tronco levemente inclinado para trás;Suba até a altura dos joelhos;Desça devagar|Usar impulso e puxar o pescoço',
'Abdominal remador|ab|ob,qu|Deitado, braços e pernas estendidos;Feche o corpo trazendo joelhos e peito;Estenda sem relaxar o abdômen|Arquear a lombar na volta',
'Prancha|ab|ob,lo,da|Cotovelos sob os ombros, corpo em linha reta;Abdômen e glúteos contraídos;Respire e mantenha|Deixar o quadril cair ou subir',
'Roda abdominal|ab|ob,la,da|Comece de joelhos, abdômen contraído;Role para a frente até onde mantiver a lombar neutra;Volte puxando com o abdômen|Arquear a lombar na ida'
];

/* ---------- reserva por grupo muscular ---------- */
var GRP={
 'Peito':['pe','da,tr','Escápulas juntas e peito alto;Cotovelos a ~45° do tronco;Desça controlado e sinta o peito alongar','Tirar o peito da posição e jogar a carga no ombro'],
 'Costas':['la,ro','bi,dp','Peito alto e ombros longe das orelhas;Puxe os cotovelos para trás e para baixo;Volte devagar, alongando as costas','Balançar o tronco e puxar só com os braços'],
 'Quadríceps':['qu','gl,ad','Joelhos acompanham a direção dos pés;Desça com controle, sem perder a postura;Empurre pelo pé inteiro','Deixar os joelhos caírem para dentro'],
 'Posterior':['po','gl,lo','Quadril firme e coluna neutra;Foque no posterior de coxa;Volte devagar','Usar impulso do quadril ou arredondar a lombar'],
 'Ombro lateral':['dl','tp','Ombros longe das orelhas;Cotovelos levemente dobrados;Suba até a altura dos ombros','Usar impulso do tronco'],
 'Ombro posterior':['dp','ro,tp','Cotovelos levemente dobrados;Abra em arco até a linha do ombro;Aperte as escápulas no final','Puxar com as costas em vez do ombro posterior'],
 'Ombro frontal':['da,dl','tr,tp','Antebraços verticais, abdômen firme;Empurre sem arquear a lombar;Desça controlado','Arquear as costas para empurrar mais carga'],
 'Bíceps':['bi','an','Cotovelos fixos ao lado do corpo;Suba sem balançar o tronco;Desça devagar até quase esticar','Jogar os cotovelos para a frente'],
 'Tríceps':['tr','','Cotovelos fixos e junto ao corpo;Estenda até esticar os braços;Volte devagar','Abrir os cotovelos ou usar impulso'],
 'Abdutores':['gm','gl','Quadril firme e tronco estável;Movimento controlado, sem impulso;Volte devagar','Usar impulso e deixar o peso bater'],
 'Panturrilha':['pa','','Alongue bem embaixo e suba o máximo nas pontas dos pés;Segure 1 segundo no topo;Descida lenta e controlada','Fazer repetições curtas e rápidas'],
 'Abdômen':['ab','ob','Contraia o abdômen antes de mover;Evite puxar o pescoço;Volte devagar','Puxar com os braços ou com o pescoço']
};
var NOTE='Orientação geral do grupo muscular. Ajuste a carga para manter boa técnica em todas as repetições.';

function nrm(s){return String(s).normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().trim()}
function cut(s){return s?s.split(','):[]}
var BY={};
RAW.forEach(function(l){var p=l.split('|');BY[nrm(p[0])]={p:cut(p[1]),a:cut(p[2]),t:p[3].split(';'),e:p[4]}});


/* ---------- famílias de substituição: cada lista reúne exercícios que cumprem o mesmo papel, do mais parecido ao menos ---------- */
var FAM=[
 ['Panturrilha em pé','Panturrilha em pé unilateral','Panturrilha em pé no Smith','Panturrilha em pé com halteres','Panturrilha no leg press','Panturrilha burro (donkey)','Panturrilha sentada'],
 ['Panturrilha sentada','Panturrilha no leg press','Panturrilha em pé','Panturrilha burro (donkey)'],
 ['Supino reto na máquina','Supino reto com halteres','Supino reto com barra','Supino reto na polia','Flexão de braço'],
 ['Supino inclinado com halteres','Supino inclinado com barra','Supino inclinado na máquina','Crucifixo inclinado com halteres','Crucifixo na polia baixa'],
 ['Supino declinado na polia','Supino declinado com barra','Supino declinado com halteres','Supino declinado na máquina','Crossover na polia alta','Mergulho nas paralelas (peito)'],
 ['Crucifixo','Crucifixo na polia','Crucifixo na máquina (peck deck)','Crossover na polia média','Crucifixo inclinado com halteres','Crucifixo na polia baixa','Crossover na polia alta','Pullover com halter (peito)'],
 ['Puxada alta','Puxada pela frente pegada aberta','Puxada com triângulo','Puxada supinada','Puxada unilateral na polia','Barra fixa pegada aberta','Barra fixa supinada'],
 ['Remada','Remada sentada na máquina','Remada linear na máquina de anilhas','Remada iso-lateral na máquina de anilhas','Remada baixa com triângulo','Remada na máquina articulada','Remada unilateral ou baixa','Remada unilateral na polia','Remada serrote (unilateral com halter)'],
 ['Remada curvada com barra','Remada Pendlay','Remada cavalinho (barra T)','Remada linear na máquina de anilhas','Remada serrote (unilateral com halter)','Remada iso-lateral na máquina de anilhas','Remada na máquina articulada','Remada'],
 ['Pullover na polia','Pulldown com braços estendidos','Pullover com halter (costas)'],
 ['Encolhimento com halteres','Encolhimento com barra','Remada alta na polia','Face pull na corda'],
 ['Agachamento no Smith','Agachamento livre','Agachamento frontal','Agachamento hack','Agachamento pendular','Agachamento em V (V-squat)','Rack','Agachamento goblet','Leg 45'],
 ['Leg 45','Leg press horizontal','Leg press 45° unilateral','Agachamento hack','Agachamento em V (V-squat)','Agachamento no Smith'],
 ['Agachamento búlgaro','Afundo com halteres','Passada andando','Avanço no Smith','Subida no banco (step-up)','Agachamento sumô'],
 ['Cadeira extensora','Cadeira extensora unilateral','Sissy squat','Agachamento hack'],
 ['Cadeira flexora','Mesa flexora','Flexora unilateral','Flexora unilateral em pé','Flexora em pé na máquina','Flexora na polia','Mesa flexora unilateral','Cadeira flexora unilateral','Mesa flexora nórdica (nordic curl)'],
 ['Stiff','Stiff com barra','Stiff com halteres','Stiff unilateral','Stiff no Smith','Levantamento terra romeno','Bom dia (good morning)','Levantamento terra convencional','Levantamento terra sumô','Hiperextensão lombar'],
 ['Elevação pélvica com barra','Elevação pélvica na máquina','Extensão de quadril na polia','Glúteo na máquina (coice)','Agachamento búlgaro','Levantamento terra sumô'],
 ['Elevação lateral na polia','Elevação lateral na máquina','Elevação lateral com halter','Elevação lateral','Elevação lateral sentado com halteres','Elevação lateral unilateral na polia','Elevação lateral deitado de lado','Elevação lateral por trás na polia','Remada alta pegada aberta'],
 ['Crucifixo inverso','Crucifixo inverso na máquina','Crucifixo inverso com halteres','Crucifixo inverso na polia','Face pull na corda','Elevação posterior unilateral na polia'],
 ['Desenvolvimento','Desenvolvimento com halteres','Desenvolvimento com barra','Desenvolvimento na máquina','Desenvolvimento no Smith','Desenvolvimento Arnold'],
 ['Elevação frontal com halteres','Elevação frontal na polia','Elevação frontal com anilha'],
 ['Rosca direta','Rosca direta com barra W','Rosca na polia baixa','Rosca alternada','Rosca inversa'],
 ['Rosca Scott ou na polia','Rosca Scott com halteres','Rosca Scott na máquina','Rosca spider','Rosca concentrada'],
 ['Rosca inclinada com halteres','Rosca inclinada na polia','Rosca bayesian na polia','Rosca spider'],
 ['Rosca martelo','Rosca martelo na corda','Rosca martelo alternada','Rosca inversa'],
 ['Tríceps barra na polia','Tríceps pulley com corda','Tríceps pulley com barra reta','Tríceps pulley pegada supinada','Tríceps unilateral na polia'],
 ['Tríceps testa na corda','Tríceps testa com barra W','Tríceps testa com halteres','Tríceps francês na corda','Tríceps francês com halter'],
 ['Tríceps francês na corda','Tríceps francês com halter','Tríceps testa na corda','Tríceps unilateral na polia','Tríceps coice com halter'],
 ['Mergulho no banco','Mergulho nas paralelas (tríceps)','Supino fechado'],
 ['Cadeira abdutora','Abdução de quadril na polia','Abdução em pé com caneleira','Abdução deitado de lado','Abdutora com tronco inclinado'],
 ['Abdominal na máquina','Abdominal na polia (corda)','Abdominal supra no solo','Abdominal declinado','Abdominal remador','Roda abdominal','Prancha'],
 ['Abdominal infra (elevação de pernas)','Elevação de pernas na barra','Abdominal oblíquo na polia']
];
function subs(name){
 var k=nrm(name),out=[],seen={};seen[k]=1;
 FAM.forEach(function(f){var i=f.map(nrm).indexOf(k);if(i<0)return;
  f.map(function(n,j){return [Math.abs(j-i),j,n]}).filter(function(x){return x[0]>0}).sort(function(a,b){return a[0]-b[0]||a[1]-b[1]}).forEach(function(x){var q=nrm(x[2]);if(!seen[q]){seen[q]=1;out.push(x[2])}})});
 return out.slice(0,6)}
window.EXI={
 v:11,
 ml:ML,
 get:function(name,group){
  var r=BY[nrm(name)];if(r)return {p:r.p,a:r.a,t:r.t,e:r.e,own:true};
  var g=GRP[group]||GRP['Peito'];return {p:cut(g[0]),a:cut(g[1]),t:g[2].split(';'),e:g[3],own:false}},
 fig:fig,
 note:NOTE,
 names:Object.keys(BY),
 subs:subs,
 fam:FAM
};
})();

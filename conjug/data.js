const P=[["yo","je"],["tú","tu"],["él / ella / usted","il / elle"],["nosotros","nous"],["vosotros","vous"],["ellos / ellas / ustedes","ils / elles"]];
const T={
pres:{n:"Presente",fr:"Présent",use:"Actions habituelles, ce qui se passe maintenant, vérités générales.",mk:"ahora, hoy, siempre, todos los días",ex:["Hablo español. – Je parle espagnol.","Comemos a las dos. – Nous mangeons à deux heures."],
 end:{ar:"-o, -as, -a, -amos, -áis, -an",er:"-o, -es, -e, -emos, -éis, -en",ir:"-o, -es, -e, -imos, -ís, -en"}},
indef:{n:"Pretérito indefinido",fr:"Passé simple / passé composé",use:"Action terminée à un moment précis du passé.",mk:"ayer, anoche, el año pasado, en 2010",ex:["Ayer hablé con Ana. – Hier, j'ai parlé avec Ana.","Vivieron en Madrid. – Ils ont vécu à Madrid."],
 end:{ar:"-é, -aste, -ó, -amos, -asteis, -aron",er:"-í, -iste, -ió, -imos, -isteis, -ieron",ir:"-í, -iste, -ió, -imos, -isteis, -ieron"}},
imp:{n:"Pretérito imperfecto",fr:"Imparfait",use:"Habitude passée, description, action en cours dans le passé.",mk:"antes, de niño, siempre, mientras, cada día",ex:["De niño hablaba mucho. – Enfant, je parlais beaucoup.","Comíamos juntos. – Nous mangions ensemble."],
 end:{ar:"-aba, -abas, -aba, -ábamos, -abais, -aban",er:"-ía, -ías, -ía, -íamos, -íais, -ían",ir:"-ía, -ías, -ía, -íamos, -íais, -ían"}},
perf:{n:"Pretérito perfecto compuesto",fr:"Passé composé (passé récent)",use:"Action passée liée au présent. Formé avec haber au présent + participe passé.",mk:"hoy, esta semana, este año, ya, todavía no, nunca",ex:["Hoy he hablado con ella. – Aujourd'hui, j'ai parlé avec elle.","¿Has comido? – Tu as mangé ?"],
 end:{ar:"he / has / ha / hemos / habéis / han + -ado",er:"he / has / ha / hemos / habéis / han + -ido",ir:"he / has / ha / hemos / habéis / han + -ido"}},
fut:{n:"Futuro simple",fr:"Futur simple",use:"Action à venir, projet, supposition. On ajoute les terminaisons à l'infinitif entier.",mk:"mañana, el año que viene, pronto, algún día",ex:["Mañana hablaré con él. – Demain, je lui parlerai.","Viviremos en Sevilla. – Nous vivrons à Séville."],
 end:{ar:"infinitif + -é, -ás, -á, -emos, -éis, -án",er:"infinitif + -é, -ás, -á, -emos, -éis, -án",ir:"infinitif + -é, -ás, -á, -emos, -éis, -án"}}
};
const E={
pres:{ar:["o","as","a","amos","áis","an"],er:["o","es","e","emos","éis","en"],ir:["o","es","e","imos","ís","en"]},
indef:{ar:["é","aste","ó","amos","asteis","aron"],er:["í","iste","ió","imos","isteis","ieron"]},
imp:{ar:["aba","abas","aba","ábamos","abais","aban"],er:["ía","ías","ía","íamos","íais","ían"]},
fut:["é","ás","á","emos","éis","án"]};
E.indef.ir=E.indef.er;E.imp.ir=E.imp.er;
const HAB=["he","has","ha","hemos","habéis","han"];
const V={
hablar:{fr:"parler",t:"ar"},trabajar:{fr:"travailler",t:"ar"},comer:{fr:"manger",t:"er"},aprender:{fr:"apprendre",t:"er"},vivir:{fr:"vivre",t:"ir"},abrir:{fr:"ouvrir",t:"ir",part:"abierto"},
ser:{fr:"être",t:"er",irr:1,pres:["soy","eres","es","somos","sois","son"],indef:["fui","fuiste","fue","fuimos","fuisteis","fueron"],imp:["era","eras","era","éramos","erais","eran"],part:"sido"},
ir:{fr:"aller",t:"ir",irr:1,pres:["voy","vas","va","vamos","vais","van"],indef:["fui","fuiste","fue","fuimos","fuisteis","fueron"],imp:["iba","ibas","iba","íbamos","ibais","iban"],part:"ido"},
tener:{fr:"avoir",t:"er",irr:1,pres:["tengo","tienes","tiene","tenemos","tenéis","tienen"],indef:["tuve","tuviste","tuvo","tuvimos","tuvisteis","tuvieron"],part:"tenido",fs:"tendr"},
hacer:{fr:"faire",t:"er",irr:1,pres:["hago","haces","hace","hacemos","hacéis","hacen"],indef:["hice","hiciste","hizo","hicimos","hicisteis","hicieron"],part:"hecho",fs:"har"}
};

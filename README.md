# VefforritunII
### Elías Andri, Kacper Roman, Egill Ari
### [Vefur(virkar ekki)](https://baenda.github.io/)
## Verkefnalýsing
Vefappið okkar snýst allt um að koma ferskum og góðum vörum frá böndum til viðskiptavini á fljótan og auðveldan hátt. Fólk myndi fara á síðuna og velja þær afurðir sem þau þurfa og appið myndi finna bestu leiðina til að koma þeim til viðkomandi, hægt að hugsa eins og Amazon fyrir íslenskar afurðir.    
Bændur sem vilja selja á síðunni skráir sig inn og skráir inn þær afurðir sem þau selja og hversu mikið þau eiga af þeim afurðum. Eina sem bóndinn þarf að gera er að taka saman pöntunum og skila þeim til sendingar og uppfæra hvað þau eiga mikið af vörum ef það breytist hvað þau eiga mikið.
## Stack
Við notuðum MERN stack sem er þá samansettur af MongoDB, Express, React og Node.js
## Mynd
![](https://media.discordapp.net/attachments/928602988908531813/947811537005981726/bndasida.png?width=1207&height=600)
## Gagnagrunnur
Gagnagrunnurinn er MongoDB og notaði ég bara frítt database hosting sem maður fær með mongodb til að geyma gögn.   
MongoDB kóðan er hægt að finna undir [database möppuni](https://github.com/baenda/VefforritunII/tree/main/database)
Ég lét inn leiðbeiningar til að prufa database á botninn af products.mjs og user.mjs   
Þetta er frekar basic db en ég bætti inn auto increment id fyrir products, ég notaði triggers inná mongodb fyrir það, kóðinn sem ég notaði fyrir það er í trigger0.js
Einnig var ég búinn að setja upp auth0 tengingu fyrir sign up og login sem var tengt við mongodb.
## Heimildir
* https://auth0.com/blog/create-a-simple-and-secure-node-express-app/
* https://auth0.com/blog/connecting-auth0-to-mongodb/
* https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3

## Næstu skref
Næstu skref væru að klára front enda og bakenda og tengja það saman til að geta haft virkandi prototype
Síðan finna út leið til að koma vorunum frá bónda til viðskiptavin.

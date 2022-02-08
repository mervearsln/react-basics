## Unit Test & Test Coverage (Mocha + Enzyme + Chai + Sinon + Istanbul)

<!-- 
Unit test: yazdığımız ya da yazacağımız kodları test etmek için yazdığımız test kodları 
yazdığımız bileşenler, sayfalar ve proje içerisinde kullandığımız yardımcı fonksiyonların hepsi bir birimdir ve 
bu birimlerin fonksiyonalitesinin doğru çalıştığını test etmek için unit testler oluşturacağız.

Mocha: 
İlk kütüphanemiz
Bir test frameworkü
estleri tanımlama ve çalıştırma aşamalarında kullanacağız.  -->
# Projemize eklemek için:


npm install mocha eslint-plugin-mocha --save-dev


ESLint, mocha’nın sağladığı API’leri anlamıyor ve bunu bir lint hatası olarak görüyor.
Bu hatayı giderebilmek için ESLint’in konfigürasyon dosyasına, .eslintrc.js içerisine birkaç ekleme yapıyoruz.
plugins kısmındaki diziye 'mocha' eklentisini kullanacağımızı belirtiyoruz:

plugins: ['babel', 'import', 'jsx-a11y', 'mocha'],



Mocha’yı projeye dahil ettik, şimdi sıra konfigüre etmede
Mocha kütüphanesi CLI’i ile birlikte geliyor ve çalıştırmak için proje dizininde terminale "mocha" yazmamız yeterli; 
fakat bu kütüphanenin birçok opsiyonel özelliği var ve bunları sırası ile -- belirteci ile argüman olarak geçmemiz gerekecek. 
Bu da oluşturacağımız script’in gereksiz uzun olmasına neden olacak. 
O yüzden mocha’nın çalışırken alacağı parametreleri ayrı bir dosyadan, 
mocha.opts dosyasından alacağız. 
Bu dosyayı proje dizinimizde test klasöründe oluşturalım ve içeriğini aşağıdaki şekilde güncelleyelim.


-------------------------------------------------------------------------
--require @babel/register
--require ignore-styles
--reporter spec
--recursive
test/utils/setup.js

Yine, aslında bunlar bir takım yardımcı araçlar… Bu araçları da projeye dahil ediyoruz:

npm install @babel/register ignore-styles --save-dev
Node.js çalışma ortamımızda, testleri çalıştırırken babel ile entegre olabilmek için babel-register kütüphanesini projemize ekledik.


Bir diğer eklentimiz ignore-styles ise proje içerisinde kullandığımız stil dosyalarının çalışma anında hata vermemesini sağlıyor. Neden çalışma anında hata verecekti? Çünkü testlerimizi node.js ile çalıştıracağız ve bu platformda CSS’e yer yok. :) Özetle, linkte belirttiğim stil dosyalarının import işlemlerinin göz ardı edilebileceğini belirtmek amaçlı olarak kullanıyoruz.

reporter argümanını ise mocha ile testleri çalıştırırken ekranda çıktıların nasıl görüneceğini belirlemek için kullanıyoruz. Mocha’nın çeşit çeşit reporter tipleri var. Testler çoğaldığında ben dot versiyonunu kullanıyorum ama bu yazıda çok fazla testimiz olmayacağından spec olarak tercih ettim.

---------------------------------------------------------------------------------
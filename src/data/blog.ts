export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  readMinutes: number;
  image: string;
  imageAlt: string;
  keywords: string[];
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "dut-pekmezi-nasil-kullanilir",
    title: "Dut Pekmezi Nasıl Kullanılır? Kahvaltıdan Tariflere 7 Fikir",
    description: "Dut pekmezini kahvaltıda, yoğurtla ve tariflerde kullanmak için pratik öneriler; saklama ve porsiyon notları.",
    excerpt: "Dut pekmezini yalnızca kaşıkla tüketmek yerine kahvaltı, yoğurt ve hamur işi tariflerinde değerlendirebilirsiniz.",
    publishedAt: "2026-07-01",
    updatedAt: "2026-07-01",
    readMinutes: 5,
    image: "/images/product-pekmez.webp",
    imageAlt: "Cam kasede koyu renkli meyve pekmezi",
    keywords: ["dut pekmezi nasıl kullanılır", "dut pekmezi tarifleri", "pekmez saklama"],
    sections: [
      {
        heading: "Kahvaltıda sade veya tahinle",
        paragraphs: ["Dut pekmezi kahvaltıda tek başına küçük porsiyonlarla sunulabilir. Tahinle karıştırıldığında kıvamı yumuşar ve ekmeğe sürülebilen bir karışım elde edilir."],
      },
      {
        heading: "Yoğurt ve yulaf kaselerinde",
        paragraphs: ["Yoğurt, yulaf, ceviz ve mevsim meyvesiyle hazırlanan kaselere az miktarda dut pekmezi eklenebilir. Böylece rafine şeker eklemeden tatlılık sağlanabilir; yine de toplam şeker miktarı dikkate alınmalıdır."],
      },
      {
        heading: "Hamur işi ve soslarda",
        paragraphs: ["Kurabiye, kek veya ev yapımı granola tariflerinde pekmez kullanılabilir. Yüksek ısıda lezzet değişebileceği için tarifteki şeker ve sıvı dengesini küçük denemelerle ayarlamak gerekir."],
        bullets: ["Tahin-pekmez karışımı", "Yoğurt ve yulaf kaseleri", "Kek ve kurabiye", "Salata sosunda küçük miktar", "Sütlü tatlılarda aroma"],
      },
      {
        heading: "Saklama ve ürün etiketi",
        paragraphs: ["Her ürünün üretim yöntemi ve ambalajı farklı olabilir. Kapağı kapalı tutun, temiz ve kuru kaşık kullanın, üreticinin açıldıktan sonraki saklama talimatını uygulayın. Kristalleşme veya kıvam farkı tek başına bozulma göstergesi değildir; koku, görünüm ve ambalaj bütünlüğünü birlikte değerlendirin."],
      },
    ],
  },
  {
    slug: "kusburnu-nasil-demlenir",
    title: "Kuşburnu Nasıl Demlenir? Renk ve Aroma İçin Adım Adım",
    description: "Kurutulmuş kuşburnunu temizleme, kırma, düşük ısıda demleme ve süzme adımları.",
    excerpt: "Kuşburnunu kaynatmak yerine düşük ısıda bekletmek, dengeli aroma elde etmeyi kolaylaştırır.",
    publishedAt: "2026-07-02",
    updatedAt: "2026-07-02",
    readMinutes: 4,
    image: "/images/product-rosehip-tea.webp",
    imageAlt: "Kuşburnu meyveleri ve kırmızı kuşburnu çayı",
    keywords: ["kuşburnu nasıl demlenir", "kuşburnu çayı tarifi", "kurutulmuş kuşburnu"],
    sections: [
      {
        heading: "Hazırlık",
        paragraphs: ["Kurutulmuş kuşburnunu ayıklayın ve kısa süre sudan geçirin. Bütün kuşburnu kullanıyorsanız meyveyi hafifçe kırmak suyla temas yüzeyini artırır."],
      },
      {
        heading: "Demleme yöntemi",
        paragraphs: ["Bir litre suya yaklaşık bir avuç kuşburnu ekleyin. Çok güçlü kaynatma yerine düşük ısıda 10–15 dakika bekletin, ardından ocağı kapatıp kısa süre dinlendirin. Miktarı damak tadınıza göre ayarlayın."],
        bullets: ["Ürünü ayıklayın", "Hafifçe kırın", "Düşük ısı kullanın", "İnce süzgeçten geçirin"],
      },
      {
        heading: "Süzme ve servis",
        paragraphs: ["Kuşburnunun iç kısmındaki ince tüyler nedeniyle çayı ince süzgeç veya temiz bir bezden geçirmek önemlidir. Sıcak ya da soğuk servis edilebilir."],
      },
      {
        heading: "Sağlık beyanları hakkında",
        paragraphs: ["Kuşburnu bir gıdadır; bu içerik tıbbi tavsiye değildir. Düzenli ilaç kullananlar, hamileler veya özel sağlık durumu olanlar tüketim konusunda sağlık profesyoneline danışmalıdır."],
      },
    ],
  },
  {
    slug: "ihlamur-nasil-hazirlanir",
    title: "Ihlamur Nasıl Hazırlanır? Kaynatmadan Demleme Rehberi",
    description: "Ihlamuru doğru su sıcaklığı, süre ve saklama koşullarıyla hazırlamak için basit rehber.",
    excerpt: "Ihlamurun aromasını korumak için uzun süre kaynatmak yerine dinlenmiş sıcak suyla kısa süre demlemek tercih edilir.",
    publishedAt: "2026-07-03",
    updatedAt: "2026-07-03",
    readMinutes: 4,
    image: "/images/story-herbal-tea.webp",
    imageAlt: "Kurutulmuş bitkiler, cam demlik ve bitki çayı",
    keywords: ["ıhlamur nasıl demlenir", "ıhlamur kaynatılır mı", "ıhlamur saklama"],
    sections: [
      {
        heading: "Su sıcaklığını ayarlayın",
        paragraphs: ["Suyu kaynattıktan sonra yaklaşık bir dakika dinlendirin. Çok yüksek sıcaklık ve uzun süreli kaynatma bitkinin narin aromasını azaltabilir."],
      },
      {
        heading: "5–10 dakika demleyin",
        paragraphs: ["Bir fincan için küçük bir tutam ıhlamur yeterlidir. Kapağı kapalı biçimde 5–10 dakika demleyin ve süzerek servis edin."],
      },
      {
        heading: "Doğru saklama",
        paragraphs: ["Ihlamuru nemden, güneşten ve yoğun kokulu gıdalardan uzak tutun. Şeffaf poşet yerine ışık geçirmeyen, hava almayacak bir kap tercih edin."],
      },
    ],
  },
  {
    slug: "kurutmalik-sebzeler-nasil-saklanir",
    title: "Kurutmalık Sebzeler Nasıl Saklanır ve Pişirmeye Hazırlanır?",
    description: "Kurutulmuş patlıcan, biber, kabak ve domates için nem kontrolü, saklama ve yumuşatma önerileri.",
    excerpt: "Kurutmalık sebzelerde en önemli konu nemden korunma ve pişirme öncesi doğru yumuşatma işlemidir.",
    publishedAt: "2026-07-04",
    updatedAt: "2026-07-04",
    readMinutes: 6,
    image: "/images/category-dried-vegetables.webp",
    imageAlt: "İplere dizilmiş kurutulmuş biber, patlıcan ve sebzeler",
    keywords: ["kurutmalık sebze saklama", "kurutulmuş patlıcan nasıl haşlanır", "kuru biber saklama"],
    sections: [
      {
        heading: "Nem en büyük risktir",
        paragraphs: ["Kurutulmuş sebzeleri kapalı, kuru ve serin bir alanda saklayın. Paket içinde buğulanma, yumuşama veya olağandışı koku fark ederseniz ürünü kullanmayın."],
      },
      {
        heading: "Dolmalıkları yumuşatma",
        paragraphs: ["Kurutulmuş patlıcan, biber ve kabağı kaynar suya alıp ürünün kalınlığına göre birkaç dakika yumuşatın. Çok uzun haşlama sebzenin dağılmasına neden olabilir."],
      },
      {
        heading: "Kurutulmuş domates kullanımı",
        paragraphs: ["Kurutulmuş domatesi ılık suda bekletip fazla tuzunu ve sertliğini azaltabilirsiniz. Daha sonra salata, makarna, kahvaltı veya soslarda kullanın."],
      },
      {
        heading: "Kontrol listesi",
        paragraphs: ["Paketleme tarihi, ürün menşei, tuz bilgisi ve saklama talimatını sipariş öncesi öğrenin."],
        bullets: ["Kuru ve serin ortam", "Hava almayan ambalaj", "Düzenli görünüm ve koku kontrolü", "Kısa süreli yumuşatma"],
      },
    ],
  },
  {
    slug: "ev-eristesi-nasil-pisirilir",
    title: "Ev Eriştesi Nasıl Pişirilir? Üç Pratik Yöntem",
    description: "Ev eriştesini klasik haşlama, kavurarak pilav ve çorba yöntemiyle hazırlama rehberi.",
    excerpt: "Ev eriştesi yalnızca makarna gibi haşlanmaz; kavrularak pilav veya çorba olarak da hazırlanabilir.",
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    readMinutes: 5,
    image: "/images/category-homemade.webp",
    imageAlt: "Unlu yüzey üzerinde ev yapımı erişte",
    keywords: ["ev eriştesi nasıl pişirilir", "erişte pilavı", "erişte çorbası"],
    sections: [
      {
        heading: "Klasik haşlama",
        paragraphs: ["Bol suyu kaynatın, az miktarda tuz ekleyin ve erişteyi pakette önerilen süre kadar pişirin. Ev eriştesi kalınlığı değişebildiği için birkaç dakika sonra tadım yaparak kontrol edin."],
      },
      {
        heading: "Kavurarak erişte pilavı",
        paragraphs: ["Eriştenin bir bölümünü tereyağı veya zeytinyağında hafifçe renk alana kadar kavurun. Kalan erişteyi ve sıcak suyu ekleyip suyunu çekene kadar pişirin."],
      },
      {
        heading: "Çorbalarda kullanım",
        paragraphs: ["Mercimek, yoğurt veya sebze çorbalarına son aşamada erişte ekleyebilirsiniz. Erişte bekledikçe sıvı çektiği için çorbanın kıvamını servis öncesi ayarlayın."],
      },
      {
        heading: "Alerjen bilgisi",
        paragraphs: ["Ev eriştesi çoğunlukla buğday ve yumurta içerir. Alerjen, içerik ve çapraz bulaşma bilgisini üreticiden teyit edin."],
      },
    ],
  },
  {
    slug: "salamura-yaprak-tuzu-nasil-alinir",
    title: "Salamura Yaprağın Tuzu Nasıl Alınır? Sarma Öncesi Hazırlık",
    description: "Salamura asma yaprağını yıkama, ılık suda bekletme ve sarma öncesi kontrol adımları.",
    excerpt: "Salamura yaprağın tuzunu dengelerken yaprağın inceliğini korumak için kontrollü yıkama ve bekletme gerekir.",
    publishedAt: "2026-07-06",
    updatedAt: "2026-07-06",
    readMinutes: 4,
    image: "/images/story-herbal-tea.webp",
    imageAlt: "Ahşap masada geleneksel mutfak malzemeleri",
    keywords: ["salamura yaprak tuzu nasıl alınır", "asma yaprağı hazırlama", "sarma yaprağı"],
    sections: [
      {
        heading: "Önce bol suyla yıkayın",
        paragraphs: ["Yaprakları demetler halinde ayırın ve birkaç kez soğuk sudan geçirin. Bu işlem yüzeydeki fazla salamurayı uzaklaştırır."],
      },
      {
        heading: "Ilık suda kontrollü bekletin",
        paragraphs: ["Yaprağın tuzluluğuna göre ılık suda 10–30 dakika bekletin. Suyu bir veya iki kez değiştirebilirsiniz. Çok uzun süre sıcak suda tutmak yaprağı yumuşatıp yırtılgan hale getirebilir."],
      },
      {
        heading: "Pişirmeden önce tadın",
        paragraphs: ["Bir yaprağın küçük bir parçasını tadarak tuz seviyesini kontrol edin. İç harcın tuzunu buna göre azaltın."],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

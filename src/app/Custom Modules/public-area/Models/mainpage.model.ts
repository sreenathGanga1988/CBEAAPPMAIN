export interface Mainpage {
  newsModels: NewsModel[];
  corouselImage1: string;
  corouselImage2: string;
  corouselImage3: string;
  mainText: string;
  slogan: string;
  rulesRegulation: string;
  dayQuote: string;
  logoImage1: string;
  logoImage2: string;
  contactDesc1: string;
  contactDesc2: string;
  contactLine1: string;
  contactLine2: string;
  contactLine3: string;
  phonenum: string;
  faxnum: string;
  website: string;
  email: string;
}


export interface NewsModel {
    newsID: number;
    dateofAction: string;
    newsText: string;
    newsLink: string;
}

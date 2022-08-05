export interface ResponseGoogleApi {
  kind: string;
  totalItems: number;
  items: Item[];
}

export interface BookDataProps {
  id: string;
  title: string;
  authors: string;
  image: string;
  description: string;
}

export interface Item {
  kind: Kind;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo: SearchInfo;
}

export interface AccessInfo {
  country: Country;
  viewability: Viewability;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: TextToSpeechPermission;
  epub: Epub;
  pdf: Epub;
  webReaderLink: string;
  accessViewStatus: AccessViewStatus;
  quoteSharingAllowed: boolean;
}

export enum AccessViewStatus {
  None = "NONE",
  Sample = "SAMPLE",
}

export enum Country {
  Ar = "AR",
}

export interface Epub {
  isAvailable: boolean;
  acsTokenLink?: string;
}

export enum TextToSpeechPermission {
  Allowed = "ALLOWED",
}

export enum Viewability {
  NoPages = "NO_PAGES",
  Partial = "PARTIAL",
}

export enum Kind {
  BooksVolume = "books#volume",
}

export interface SaleInfo {
  country: Country;
  saleability: Saleability;
  isEbook: boolean;
  listPrice?: SaleInfoListPrice;
  retailPrice?: SaleInfoListPrice;
  buyLink?: string;
  offers?: Offer[];
}

export interface SaleInfoListPrice {
  amount: number;
  currencyCode: CurrencyCode;
}

export enum CurrencyCode {
  Ars = "ARS",
}

export interface Offer {
  finskyOfferType: number;
  listPrice: OfferListPrice;
  retailPrice: OfferListPrice;
}

export interface OfferListPrice {
  amountInMicros: number;
  currencyCode: CurrencyCode;
}

export enum Saleability {
  ForSale = "FOR_SALE",
  NotForSale = "NOT_FOR_SALE",
}

export interface SearchInfo {
  textSnippet: string;
}

export interface VolumeInfo {
  title: string;
  subtitle?: string;
  authors: string[];
  publisher: string;
  publishedDate: Date;
  description: string;
  industryIdentifiers?: IndustryIdentifier[];
  readingModes: ReadingModes;
  pageCount: number;
  printType: PrintType;
  maturityRating: MaturityRating;
  allowAnonLogging: boolean;
  contentVersion: ContentVersion;
  panelizationSummary?: PanelizationSummary;
  imageLinks: ImageLinks;
  language: Language;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  categories?: string[];
  averageRating?: number;
  ratingsCount?: number;
}

export enum ContentVersion {
  Preview100 = "preview-1.0.0",
  The1110Preview3 = "1.1.1.0.preview.3",
  The1120Preview3 = "1.1.2.0.preview.3",
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface IndustryIdentifier {
  type: Type;
  identifier: string;
}

export enum Type {
  Isbn10 = "ISBN_10",
  Isbn13 = "ISBN_13",
}

export enum Language {
  En = "en",
  Es = "es",
}

export enum MaturityRating {
  NotMature = "NOT_MATURE",
}

export interface PanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}

export enum PrintType {
  Book = "BOOK",
}

export interface ReadingModes {
  text: boolean;
  image: boolean;
}

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  I18NLocaleCode: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Long: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Attribute = {
  __typename?: 'Attribute';
  attr_cat_priority?: Maybe<Scalars['Int']['output']>;
  attribute_category?: Maybe<AttributeCategoryEntityResponse>;
  attribute_values?: Maybe<AttributeValueRelationResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  featured_priority?: Maybe<Scalars['Int']['output']>;
  filterable: Scalars['Boolean']['output'];
  is_featured?: Maybe<Scalars['Boolean']['output']>;
  is_variant?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type AttributeAttribute_ValuesArgs = {
  filters?: InputMaybe<AttributeValueFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AttributeCategory = {
  __typename?: 'AttributeCategory';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AttributeCategoryEntity = {
  __typename?: 'AttributeCategoryEntity';
  attributes?: Maybe<AttributeCategory>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AttributeCategoryEntityResponse = {
  __typename?: 'AttributeCategoryEntityResponse';
  data?: Maybe<AttributeCategoryEntity>;
};

export type AttributeCategoryEntityResponseCollection = {
  __typename?: 'AttributeCategoryEntityResponseCollection';
  data: Array<AttributeCategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type AttributeCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AttributeCategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<AttributeCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AttributeCategoryFiltersInput>>>;
  priority?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AttributeCategoryInput = {
  priority?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AttributeEntity = {
  __typename?: 'AttributeEntity';
  attributes?: Maybe<Attribute>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AttributeEntityResponse = {
  __typename?: 'AttributeEntityResponse';
  data?: Maybe<AttributeEntity>;
};

export type AttributeEntityResponseCollection = {
  __typename?: 'AttributeEntityResponseCollection';
  data: Array<AttributeEntity>;
  meta: ResponseCollectionMeta;
};

export type AttributeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AttributeFiltersInput>>>;
  attr_cat_priority?: InputMaybe<IntFilterInput>;
  attribute_category?: InputMaybe<AttributeCategoryFiltersInput>;
  attribute_values?: InputMaybe<AttributeValueFiltersInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  featured_priority?: InputMaybe<IntFilterInput>;
  filterable?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  is_featured?: InputMaybe<BooleanFilterInput>;
  is_variant?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<AttributeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AttributeFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AttributeInput = {
  attr_cat_priority?: InputMaybe<Scalars['Int']['input']>;
  attribute_category?: InputMaybe<Scalars['ID']['input']>;
  attribute_values?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  category?: InputMaybe<Scalars['ID']['input']>;
  featured_priority?: InputMaybe<Scalars['Int']['input']>;
  filterable?: InputMaybe<Scalars['Boolean']['input']>;
  is_featured?: InputMaybe<Scalars['Boolean']['input']>;
  is_variant?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AttributeValue = {
  __typename?: 'AttributeValue';
  attribute_id?: Maybe<AttributeEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  etc?: Maybe<Scalars['String']['output']>;
  products?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value: Scalars['String']['output'];
};


export type AttributeValueProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AttributeValueEntity = {
  __typename?: 'AttributeValueEntity';
  attributes?: Maybe<AttributeValue>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AttributeValueEntityResponse = {
  __typename?: 'AttributeValueEntityResponse';
  data?: Maybe<AttributeValueEntity>;
};

export type AttributeValueEntityResponseCollection = {
  __typename?: 'AttributeValueEntityResponseCollection';
  data: Array<AttributeValueEntity>;
  meta: ResponseCollectionMeta;
};

export type AttributeValueFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AttributeValueFiltersInput>>>;
  attribute_id?: InputMaybe<AttributeFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  etc?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<AttributeValueFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AttributeValueFiltersInput>>>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type AttributeValueInput = {
  attribute_id?: InputMaybe<Scalars['ID']['input']>;
  etc?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type AttributeValueRelationResponseCollection = {
  __typename?: 'AttributeValueRelationResponseCollection';
  data: Array<AttributeValueEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Brand = {
  __typename?: 'Brand';
  background_image: UploadFileEntityResponse;
  brand_image: UploadFileEntityResponse;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  english_name: Scalars['String']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<BrandRelationResponseCollection>;
  persian_name: Scalars['String']['output'];
  posts?: Maybe<PostRelationResponseCollection>;
  priority?: Maybe<Scalars['Int']['output']>;
  products?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type BrandLocalizationsArgs = {
  filters?: InputMaybe<BrandFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BrandPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BrandProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BrandEntity = {
  __typename?: 'BrandEntity';
  attributes?: Maybe<Brand>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type BrandEntityResponse = {
  __typename?: 'BrandEntityResponse';
  data?: Maybe<BrandEntity>;
};

export type BrandEntityResponseCollection = {
  __typename?: 'BrandEntityResponseCollection';
  data: Array<BrandEntity>;
  meta: ResponseCollectionMeta;
};

export type BrandFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BrandFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  english_name?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<BrandFiltersInput>;
  not?: InputMaybe<BrandFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BrandFiltersInput>>>;
  persian_name?: InputMaybe<StringFilterInput>;
  posts?: InputMaybe<PostFiltersInput>;
  priority?: InputMaybe<IntFilterInput>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BrandInput = {
  background_image?: InputMaybe<Scalars['ID']['input']>;
  brand_image?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  english_name?: InputMaybe<Scalars['String']['input']>;
  persian_name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type BrandRelationResponseCollection = {
  __typename?: 'BrandRelationResponseCollection';
  data: Array<BrandEntity>;
};

export type Category = {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  depth?: Maybe<Scalars['Int']['output']>;
  lft?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  parent_id?: Maybe<CategoryEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  rght?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  depth?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lft?: InputMaybe<IntFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  parent_id?: InputMaybe<CategoryFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  rght?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  depth?: InputMaybe<Scalars['Int']['input']>;
  lft?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent_id?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rght?: InputMaybe<Scalars['Int']['input']>;
};

export type CmsAnalyzerAnalyse = {
  __typename?: 'CmsAnalyzerAnalyse';
  apiName?: Maybe<Scalars['String']['output']>;
  contentKind?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  depth?: Maybe<Scalars['Int']['output']>;
  documentFields?: Maybe<Scalars['JSON']['output']>;
  documentId?: Maybe<Scalars['Int']['output']>;
  frontUrl?: Maybe<Scalars['String']['output']>;
  isChecked?: Maybe<Scalars['Boolean']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  screenshot?: Maybe<Scalars['String']['output']>;
  seoAnalyse?: Maybe<Scalars['JSON']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CmsAnalyzerAnalyseEntity = {
  __typename?: 'CmsAnalyzerAnalyseEntity';
  attributes?: Maybe<CmsAnalyzerAnalyse>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CmsAnalyzerAnalyseEntityResponse = {
  __typename?: 'CmsAnalyzerAnalyseEntityResponse';
  data?: Maybe<CmsAnalyzerAnalyseEntity>;
};

export type CmsAnalyzerAnalyseEntityResponseCollection = {
  __typename?: 'CmsAnalyzerAnalyseEntityResponseCollection';
  data: Array<CmsAnalyzerAnalyseEntity>;
  meta: ResponseCollectionMeta;
};

export type CmsAnalyzerAnalyseFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CmsAnalyzerAnalyseFiltersInput>>>;
  apiName?: InputMaybe<StringFilterInput>;
  contentKind?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  depth?: InputMaybe<IntFilterInput>;
  documentFields?: InputMaybe<JsonFilterInput>;
  documentId?: InputMaybe<IntFilterInput>;
  frontUrl?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isChecked?: InputMaybe<BooleanFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CmsAnalyzerAnalyseFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CmsAnalyzerAnalyseFiltersInput>>>;
  screenshot?: InputMaybe<StringFilterInput>;
  seoAnalyse?: InputMaybe<JsonFilterInput>;
  tags?: InputMaybe<JsonFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CmsAnalyzerAnalyseInput = {
  apiName?: InputMaybe<Scalars['String']['input']>;
  contentKind?: InputMaybe<Scalars['String']['input']>;
  depth?: InputMaybe<Scalars['Int']['input']>;
  documentFields?: InputMaybe<Scalars['JSON']['input']>;
  documentId?: InputMaybe<Scalars['Int']['input']>;
  frontUrl?: InputMaybe<Scalars['String']['input']>;
  isChecked?: InputMaybe<Scalars['Boolean']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  screenshot?: InputMaybe<Scalars['String']['input']>;
  seoAnalyse?: InputMaybe<Scalars['JSON']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
};

export type CmsAnalyzerMatch = {
  __typename?: 'CmsAnalyzerMatch';
  apiName?: Maybe<Scalars['String']['output']>;
  componentName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dynamicZoneName?: Maybe<Scalars['String']['output']>;
  fieldName?: Maybe<Scalars['String']['output']>;
  isMultipleDoc?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tagName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CmsAnalyzerMatchEntity = {
  __typename?: 'CmsAnalyzerMatchEntity';
  attributes?: Maybe<CmsAnalyzerMatch>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CmsAnalyzerMatchEntityResponse = {
  __typename?: 'CmsAnalyzerMatchEntityResponse';
  data?: Maybe<CmsAnalyzerMatchEntity>;
};

export type CmsAnalyzerMatchEntityResponseCollection = {
  __typename?: 'CmsAnalyzerMatchEntityResponseCollection';
  data: Array<CmsAnalyzerMatchEntity>;
  meta: ResponseCollectionMeta;
};

export type CmsAnalyzerMatchFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CmsAnalyzerMatchFiltersInput>>>;
  apiName?: InputMaybe<StringFilterInput>;
  componentName?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dynamicZoneName?: InputMaybe<StringFilterInput>;
  fieldName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isMultipleDoc?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<CmsAnalyzerMatchFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CmsAnalyzerMatchFiltersInput>>>;
  status?: InputMaybe<StringFilterInput>;
  tagName?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CmsAnalyzerMatchInput = {
  apiName?: InputMaybe<Scalars['String']['input']>;
  componentName?: InputMaybe<Scalars['String']['input']>;
  dynamicZoneName?: InputMaybe<Scalars['String']['input']>;
  fieldName?: InputMaybe<Scalars['String']['input']>;
  isMultipleDoc?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tagName?: InputMaybe<Scalars['String']['input']>;
};

export type CmsAnalyzerMedia = {
  __typename?: 'CmsAnalyzerMedia';
  alt?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  frontUrl?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  mediaUrl?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type CmsAnalyzerMediaEntity = {
  __typename?: 'CmsAnalyzerMediaEntity';
  attributes?: Maybe<CmsAnalyzerMedia>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CmsAnalyzerMediaEntityResponse = {
  __typename?: 'CmsAnalyzerMediaEntityResponse';
  data?: Maybe<CmsAnalyzerMediaEntity>;
};

export type CmsAnalyzerMediaEntityResponseCollection = {
  __typename?: 'CmsAnalyzerMediaEntityResponseCollection';
  data: Array<CmsAnalyzerMediaEntity>;
  meta: ResponseCollectionMeta;
};

export type CmsAnalyzerMediaFiltersInput = {
  alt?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<CmsAnalyzerMediaFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  data?: InputMaybe<JsonFilterInput>;
  frontUrl?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mediaUrl?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CmsAnalyzerMediaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CmsAnalyzerMediaFiltersInput>>>;
  status?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type CmsAnalyzerMediaInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  frontUrl?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mediaUrl?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type CmsAnalyzerSummary = {
  __typename?: 'CmsAnalyzerSummary';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  frontUrl?: Maybe<Scalars['String']['output']>;
  nbErrorHigh?: Maybe<Scalars['Int']['output']>;
  nbErrorLow?: Maybe<Scalars['Int']['output']>;
  nbUrl?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<Scalars['String']['output']>;
};

export type CmsAnalyzerSummaryEntity = {
  __typename?: 'CmsAnalyzerSummaryEntity';
  attributes?: Maybe<CmsAnalyzerSummary>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CmsAnalyzerSummaryEntityResponse = {
  __typename?: 'CmsAnalyzerSummaryEntityResponse';
  data?: Maybe<CmsAnalyzerSummaryEntity>;
};

export type CmsAnalyzerSummaryEntityResponseCollection = {
  __typename?: 'CmsAnalyzerSummaryEntityResponseCollection';
  data: Array<CmsAnalyzerSummaryEntity>;
  meta: ResponseCollectionMeta;
};

export type CmsAnalyzerSummaryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CmsAnalyzerSummaryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateTimeFilterInput>;
  frontUrl?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  nbErrorHigh?: InputMaybe<IntFilterInput>;
  nbErrorLow?: InputMaybe<IntFilterInput>;
  nbUrl?: InputMaybe<IntFilterInput>;
  not?: InputMaybe<CmsAnalyzerSummaryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CmsAnalyzerSummaryFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<StringFilterInput>;
};

export type CmsAnalyzerSummaryInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  frontUrl?: InputMaybe<Scalars['String']['input']>;
  nbErrorHigh?: InputMaybe<Scalars['Int']['input']>;
  nbErrorLow?: InputMaybe<Scalars['Int']['input']>;
  nbUrl?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type CommentsComment = {
  __typename?: 'CommentsComment';
  approvalStatus?: Maybe<Scalars['String']['output']>;
  authorAvatar?: Maybe<Scalars['String']['output']>;
  authorEmail?: Maybe<Scalars['String']['output']>;
  authorId?: Maybe<Scalars['String']['output']>;
  authorName?: Maybe<Scalars['String']['output']>;
  authorUser?: Maybe<UsersPermissionsUserEntityResponse>;
  blockReason?: Maybe<Scalars['String']['output']>;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  blockedThread?: Maybe<Scalars['Boolean']['output']>;
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  isAdminComment?: Maybe<Scalars['Boolean']['output']>;
  related?: Maybe<Scalars['String']['output']>;
  removed?: Maybe<Scalars['Boolean']['output']>;
  reports?: Maybe<CommentsCommentReportRelationResponseCollection>;
  threadOf?: Maybe<CommentsCommentEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CommentsCommentReportsArgs = {
  filters?: InputMaybe<CommentsCommentReportFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CommentsCommentEntity = {
  __typename?: 'CommentsCommentEntity';
  attributes?: Maybe<CommentsComment>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CommentsCommentEntityResponse = {
  __typename?: 'CommentsCommentEntityResponse';
  data?: Maybe<CommentsCommentEntity>;
};

export type CommentsCommentEntityResponseCollection = {
  __typename?: 'CommentsCommentEntityResponseCollection';
  data: Array<CommentsCommentEntity>;
  meta: ResponseCollectionMeta;
};

export type CommentsCommentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CommentsCommentFiltersInput>>>;
  approvalStatus?: InputMaybe<StringFilterInput>;
  authorAvatar?: InputMaybe<StringFilterInput>;
  authorEmail?: InputMaybe<StringFilterInput>;
  authorId?: InputMaybe<StringFilterInput>;
  authorName?: InputMaybe<StringFilterInput>;
  authorUser?: InputMaybe<UsersPermissionsUserFiltersInput>;
  blockReason?: InputMaybe<StringFilterInput>;
  blocked?: InputMaybe<BooleanFilterInput>;
  blockedThread?: InputMaybe<BooleanFilterInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isAdminComment?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<CommentsCommentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CommentsCommentFiltersInput>>>;
  related?: InputMaybe<StringFilterInput>;
  removed?: InputMaybe<BooleanFilterInput>;
  reports?: InputMaybe<CommentsCommentReportFiltersInput>;
  threadOf?: InputMaybe<CommentsCommentFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CommentsCommentInput = {
  approvalStatus?: InputMaybe<Scalars['String']['input']>;
  authorAvatar?: InputMaybe<Scalars['String']['input']>;
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  authorId?: InputMaybe<Scalars['String']['input']>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorUser?: InputMaybe<Scalars['ID']['input']>;
  blockReason?: InputMaybe<Scalars['String']['input']>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  blockedThread?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  isAdminComment?: InputMaybe<Scalars['Boolean']['input']>;
  related?: InputMaybe<Scalars['String']['input']>;
  removed?: InputMaybe<Scalars['Boolean']['input']>;
  reports?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  threadOf?: InputMaybe<Scalars['ID']['input']>;
};

export type CommentsCommentReport = {
  __typename?: 'CommentsCommentReport';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  reason: Enum_Commentscommentreport_Reason;
  related?: Maybe<CommentsCommentEntityResponse>;
  resolved?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CommentsCommentReportEntity = {
  __typename?: 'CommentsCommentReportEntity';
  attributes?: Maybe<CommentsCommentReport>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CommentsCommentReportEntityResponse = {
  __typename?: 'CommentsCommentReportEntityResponse';
  data?: Maybe<CommentsCommentReportEntity>;
};

export type CommentsCommentReportEntityResponseCollection = {
  __typename?: 'CommentsCommentReportEntityResponseCollection';
  data: Array<CommentsCommentReportEntity>;
  meta: ResponseCollectionMeta;
};

export type CommentsCommentReportFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CommentsCommentReportFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CommentsCommentReportFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CommentsCommentReportFiltersInput>>>;
  reason?: InputMaybe<StringFilterInput>;
  related?: InputMaybe<CommentsCommentFiltersInput>;
  resolved?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CommentsCommentReportInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Enum_Commentscommentreport_Reason>;
  related?: InputMaybe<Scalars['ID']['input']>;
  resolved?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentsCommentReportRelationResponseCollection = {
  __typename?: 'CommentsCommentReportRelationResponseCollection';
  data: Array<CommentsCommentReportEntity>;
};

export type ComponentPricingSubVar = {
  __typename?: 'ComponentPricingSubVar';
  attr_value?: Maybe<AttributeValueEntityResponse>;
  id: Scalars['ID']['output'];
};

export type ComponentPricingSubVarFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPricingSubVarFiltersInput>>>;
  attr_value?: InputMaybe<AttributeValueFiltersInput>;
  not?: InputMaybe<ComponentPricingSubVarFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPricingSubVarFiltersInput>>>;
};

export type ComponentPricingSubVarInput = {
  attr_value?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentPricingVariant = {
  __typename?: 'ComponentPricingVariant';
  id: Scalars['ID']['output'];
  price?: Maybe<Scalars['Long']['output']>;
  variation?: Maybe<Array<Maybe<ComponentPricingSubVar>>>;
};


export type ComponentPricingVariantVariationArgs = {
  filters?: InputMaybe<ComponentPricingSubVarFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentPricingVariantFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPricingVariantFiltersInput>>>;
  not?: InputMaybe<ComponentPricingVariantFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPricingVariantFiltersInput>>>;
  price?: InputMaybe<LongFilterInput>;
  variation?: InputMaybe<ComponentPricingSubVarFiltersInput>;
};

export type ComponentPricingVariantInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  price?: InputMaybe<Scalars['Long']['input']>;
  variation?: InputMaybe<Array<InputMaybe<ComponentPricingSubVarInput>>>;
};

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
  title: Scalars['String']['output'];
};

export type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  socialNetwork?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedMetaSocialInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  socialNetwork?: InputMaybe<Enum_Componentsharedmetasocial_Socialnetwork>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  metaDescription: Scalars['String']['output'];
  metaImage?: Maybe<UploadFileEntityResponse>;
  metaRobots?: Maybe<Scalars['String']['output']>;
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>;
  metaTitle: Scalars['String']['output'];
  metaViewport?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  structuredData?: Maybe<Scalars['JSON']['output']>;
};


export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  canonicalURL?: InputMaybe<StringFilterInput>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaRobots?: InputMaybe<StringFilterInput>;
  metaSocial?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  metaViewport?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  structuredData?: InputMaybe<JsonFilterInput>;
};

export type ComponentSharedSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaImage?: InputMaybe<Scalars['ID']['input']>;
  metaRobots?: InputMaybe<Scalars['String']['input']>;
  metaSocial?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialInput>>>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaViewport?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  structuredData?: InputMaybe<Scalars['JSON']['input']>;
};

export type Creator = {
  __typename?: 'Creator';
  firstname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
};

export type CustomContentTypeA = {
  __typename?: 'CustomContentTypeA';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CustomContentTypeAEntity = {
  __typename?: 'CustomContentTypeAEntity';
  attributes?: Maybe<CustomContentTypeA>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CustomContentTypeAEntityResponse = {
  __typename?: 'CustomContentTypeAEntityResponse';
  data?: Maybe<CustomContentTypeAEntity>;
};

export type CustomContentTypeAEntityResponseCollection = {
  __typename?: 'CustomContentTypeAEntityResponseCollection';
  data: Array<CustomContentTypeAEntity>;
  meta: ResponseCollectionMeta;
};

export type CustomContentTypeAFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CustomContentTypeAFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CustomContentTypeAFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CustomContentTypeAFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CustomContentTypeAInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Commentscommentreport_Reason {
  BadLanguage = 'BAD_LANGUAGE',
  Discrimination = 'DISCRIMINATION',
  Other = 'OTHER'
}

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter'
}

export enum Enum_Post_Type {
  Article = 'article',
  News = 'news',
  Review = 'review'
}

export enum Enum_Product_Market_Status {
  Available = 'AVAILABLE',
  Discontinued = 'DISCONTINUED',
  NotAvailable = 'NOT_AVAILABLE',
  Soon = 'SOON'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Attribute | AttributeCategory | AttributeValue | Brand | Category | CmsAnalyzerAnalyse | CmsAnalyzerMatch | CmsAnalyzerMedia | CmsAnalyzerSummary | CommentsComment | CommentsCommentReport | ComponentPricingSubVar | ComponentPricingVariant | ComponentSharedMetaSocial | ComponentSharedSeo | CustomContentTypeA | I18NLocale | Post | Product | RatingsRContentId | RatingsReview | StaticPage | Tag | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  contains?: InputMaybe<Scalars['Long']['input']>;
  containsi?: InputMaybe<Scalars['Long']['input']>;
  endsWith?: InputMaybe<Scalars['Long']['input']>;
  eq?: InputMaybe<Scalars['Long']['input']>;
  eqi?: InputMaybe<Scalars['Long']['input']>;
  gt?: InputMaybe<Scalars['Long']['input']>;
  gte?: InputMaybe<Scalars['Long']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  lt?: InputMaybe<Scalars['Long']['input']>;
  lte?: InputMaybe<Scalars['Long']['input']>;
  ne?: InputMaybe<Scalars['Long']['input']>;
  nei?: InputMaybe<Scalars['Long']['input']>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars['Long']['input']>;
  notContainsi?: InputMaybe<Scalars['Long']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  startsWith?: InputMaybe<Scalars['Long']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAttribute?: Maybe<AttributeEntityResponse>;
  createAttributeCategory?: Maybe<AttributeCategoryEntityResponse>;
  createAttributeValue?: Maybe<AttributeValueEntityResponse>;
  createBrand?: Maybe<BrandEntityResponse>;
  createBrandLocalization?: Maybe<BrandEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createCmsAnalyzerAnalyse?: Maybe<CmsAnalyzerAnalyseEntityResponse>;
  createCmsAnalyzerMatch?: Maybe<CmsAnalyzerMatchEntityResponse>;
  createCmsAnalyzerMedia?: Maybe<CmsAnalyzerMediaEntityResponse>;
  createCmsAnalyzerSummary?: Maybe<CmsAnalyzerSummaryEntityResponse>;
  createCommentsComment?: Maybe<CommentsCommentEntityResponse>;
  createCommentsCommentReport?: Maybe<CommentsCommentReportEntityResponse>;
  createCustomContentTypeA?: Maybe<CustomContentTypeAEntityResponse>;
  createPost?: Maybe<PostEntityResponse>;
  createProduct?: Maybe<ProductEntityResponse>;
  createRatingsRContentId?: Maybe<RatingsRContentIdEntityResponse>;
  createRatingsReview?: Maybe<RatingsReviewEntityResponse>;
  createStaticPage?: Maybe<StaticPageEntityResponse>;
  createTag?: Maybe<TagEntityResponse>;
  createTagLocalization?: Maybe<TagEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAttribute?: Maybe<AttributeEntityResponse>;
  deleteAttributeCategory?: Maybe<AttributeCategoryEntityResponse>;
  deleteAttributeValue?: Maybe<AttributeValueEntityResponse>;
  deleteBrand?: Maybe<BrandEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteCmsAnalyzerAnalyse?: Maybe<CmsAnalyzerAnalyseEntityResponse>;
  deleteCmsAnalyzerMatch?: Maybe<CmsAnalyzerMatchEntityResponse>;
  deleteCmsAnalyzerMedia?: Maybe<CmsAnalyzerMediaEntityResponse>;
  deleteCmsAnalyzerSummary?: Maybe<CmsAnalyzerSummaryEntityResponse>;
  deleteCommentsComment?: Maybe<CommentsCommentEntityResponse>;
  deleteCommentsCommentReport?: Maybe<CommentsCommentReportEntityResponse>;
  deleteCustomContentTypeA?: Maybe<CustomContentTypeAEntityResponse>;
  deletePost?: Maybe<PostEntityResponse>;
  deleteProduct?: Maybe<ProductEntityResponse>;
  deleteRatingsRContentId?: Maybe<RatingsRContentIdEntityResponse>;
  deleteRatingsReview?: Maybe<RatingsReviewEntityResponse>;
  deleteStaticPage?: Maybe<StaticPageEntityResponse>;
  deleteTag?: Maybe<TagEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAttribute?: Maybe<AttributeEntityResponse>;
  updateAttributeCategory?: Maybe<AttributeCategoryEntityResponse>;
  updateAttributeValue?: Maybe<AttributeValueEntityResponse>;
  updateBrand?: Maybe<BrandEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateCmsAnalyzerAnalyse?: Maybe<CmsAnalyzerAnalyseEntityResponse>;
  updateCmsAnalyzerMatch?: Maybe<CmsAnalyzerMatchEntityResponse>;
  updateCmsAnalyzerMedia?: Maybe<CmsAnalyzerMediaEntityResponse>;
  updateCmsAnalyzerSummary?: Maybe<CmsAnalyzerSummaryEntityResponse>;
  updateCommentsComment?: Maybe<CommentsCommentEntityResponse>;
  updateCommentsCommentReport?: Maybe<CommentsCommentReportEntityResponse>;
  updateCustomContentTypeA?: Maybe<CustomContentTypeAEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updatePost?: Maybe<PostEntityResponse>;
  updateProduct?: Maybe<ProductEntityResponse>;
  updateRatingsRContentId?: Maybe<RatingsRContentIdEntityResponse>;
  updateRatingsReview?: Maybe<RatingsReviewEntityResponse>;
  updateStaticPage?: Maybe<StaticPageEntityResponse>;
  updateTag?: Maybe<TagEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateAttributeArgs = {
  data: AttributeInput;
};


export type MutationCreateAttributeCategoryArgs = {
  data: AttributeCategoryInput;
};


export type MutationCreateAttributeValueArgs = {
  data: AttributeValueInput;
};


export type MutationCreateBrandArgs = {
  data: BrandInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateBrandLocalizationArgs = {
  data?: InputMaybe<BrandInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateCmsAnalyzerAnalyseArgs = {
  data: CmsAnalyzerAnalyseInput;
};


export type MutationCreateCmsAnalyzerMatchArgs = {
  data: CmsAnalyzerMatchInput;
};


export type MutationCreateCmsAnalyzerMediaArgs = {
  data: CmsAnalyzerMediaInput;
};


export type MutationCreateCmsAnalyzerSummaryArgs = {
  data: CmsAnalyzerSummaryInput;
};


export type MutationCreateCommentsCommentArgs = {
  data: CommentsCommentInput;
};


export type MutationCreateCommentsCommentReportArgs = {
  data: CommentsCommentReportInput;
};


export type MutationCreateCustomContentTypeAArgs = {
  data: CustomContentTypeAInput;
};


export type MutationCreatePostArgs = {
  data: PostInput;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
};


export type MutationCreateRatingsRContentIdArgs = {
  data: RatingsRContentIdInput;
};


export type MutationCreateRatingsReviewArgs = {
  data: RatingsReviewInput;
};


export type MutationCreateStaticPageArgs = {
  data: StaticPageInput;
};


export type MutationCreateTagArgs = {
  data: TagInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateTagLocalizationArgs = {
  data?: InputMaybe<TagInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteAttributeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteAttributeCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteAttributeValueArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBrandArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCmsAnalyzerAnalyseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCmsAnalyzerMatchArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCmsAnalyzerMediaArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCmsAnalyzerSummaryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommentsCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommentsCommentReportArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCustomContentTypeAArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRatingsRContentIdArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRatingsReviewArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteStaticPageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAttributeArgs = {
  data: AttributeInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateAttributeCategoryArgs = {
  data: AttributeCategoryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateAttributeValueArgs = {
  data: AttributeValueInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBrandArgs = {
  data: BrandInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCmsAnalyzerAnalyseArgs = {
  data: CmsAnalyzerAnalyseInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCmsAnalyzerMatchArgs = {
  data: CmsAnalyzerMatchInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCmsAnalyzerMediaArgs = {
  data: CmsAnalyzerMediaInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCmsAnalyzerSummaryArgs = {
  data: CmsAnalyzerSummaryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCommentsCommentArgs = {
  data: CommentsCommentInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCommentsCommentReportArgs = {
  data: CommentsCommentReportInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCustomContentTypeAArgs = {
  data: CustomContentTypeAInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdatePostArgs = {
  data: PostInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateRatingsRContentIdArgs = {
  data: RatingsRContentIdInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateRatingsReviewArgs = {
  data: RatingsReviewInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateStaticPageArgs = {
  data: StaticPageInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTagArgs = {
  data: TagInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Post = {
  __typename?: 'Post';
  brands?: Maybe<BrandRelationResponseCollection>;
  comment?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Creator>;
  is_hot?: Maybe<Scalars['Boolean']['output']>;
  main_image?: Maybe<UploadFileEntityResponse>;
  main_product?: Maybe<ProductEntityResponse>;
  main_tag?: Maybe<TagEntityResponse>;
  main_text?: Maybe<Scalars['String']['output']>;
  products?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  reading_time?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  source?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<TagRelationResponseCollection>;
  titre?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Enum_Post_Type>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PostBrandsArgs = {
  filters?: InputMaybe<BrandFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PostProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PostTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostEntity = {
  __typename?: 'PostEntity';
  attributes?: Maybe<Post>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PostEntityResponse = {
  __typename?: 'PostEntityResponse';
  data?: Maybe<PostEntity>;
};

export type PostEntityResponseCollection = {
  __typename?: 'PostEntityResponseCollection';
  data: Array<PostEntity>;
  meta: ResponseCollectionMeta;
};

export type PostFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  brands?: InputMaybe<BrandFiltersInput>;
  comment?: InputMaybe<JsonFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  is_hot?: InputMaybe<BooleanFilterInput>;
  main_product?: InputMaybe<ProductFiltersInput>;
  main_tag?: InputMaybe<TagFiltersInput>;
  main_text?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  reading_time?: InputMaybe<StringFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  source?: InputMaybe<StringFilterInput>;
  summary?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  titre?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PostInput = {
  brands?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  comment?: InputMaybe<Scalars['JSON']['input']>;
  is_hot?: InputMaybe<Scalars['Boolean']['input']>;
  main_image?: InputMaybe<Scalars['ID']['input']>;
  main_product?: InputMaybe<Scalars['ID']['input']>;
  main_tag?: InputMaybe<Scalars['ID']['input']>;
  main_text?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  reading_time?: InputMaybe<Scalars['String']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  source?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  titre?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Enum_Post_Type>;
};

export type PostRelationResponseCollection = {
  __typename?: 'PostRelationResponseCollection';
  data: Array<PostEntity>;
};

export type Product = {
  __typename?: 'Product';
  attribute_values?: Maybe<AttributeValueRelationResponseCollection>;
  brand?: Maybe<BrandEntityResponse>;
  category?: Maybe<CategoryEntityResponse>;
  comments?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  gsmarena_url?: Maybe<Scalars['String']['output']>;
  images?: Maybe<UploadFileRelationResponseCollection>;
  main_image?: Maybe<UploadFileEntityResponse>;
  main_product_posts?: Maybe<PostRelationResponseCollection>;
  main_tag?: Maybe<TagEntityResponse>;
  market_status?: Maybe<Enum_Product_Market_Status>;
  model?: Maybe<Scalars['String']['output']>;
  model_en?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  name_en?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<PostRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  variant?: Maybe<Array<Maybe<ComponentPricingVariant>>>;
};


export type ProductAttribute_ValuesArgs = {
  filters?: InputMaybe<AttributeValueFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductMain_Product_PostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductVariantArgs = {
  filters?: InputMaybe<ComponentPricingVariantFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProductEntity = {
  __typename?: 'ProductEntity';
  attributes?: Maybe<Product>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProductEntityResponse = {
  __typename?: 'ProductEntityResponse';
  data?: Maybe<ProductEntity>;
};

export type ProductEntityResponseCollection = {
  __typename?: 'ProductEntityResponseCollection';
  data: Array<ProductEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  attribute_values?: InputMaybe<AttributeValueFiltersInput>;
  brand?: InputMaybe<BrandFiltersInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  comments?: InputMaybe<JsonFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  gsmarena_url?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  main_product_posts?: InputMaybe<PostFiltersInput>;
  main_tag?: InputMaybe<TagFiltersInput>;
  market_status?: InputMaybe<StringFilterInput>;
  model?: InputMaybe<StringFilterInput>;
  model_en?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  name_en?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  posts?: InputMaybe<PostFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  variant?: InputMaybe<ComponentPricingVariantFiltersInput>;
};

export type ProductInput = {
  attribute_values?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  brand?: InputMaybe<Scalars['ID']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  comments?: InputMaybe<Scalars['JSON']['input']>;
  gsmarena_url?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  main_image?: InputMaybe<Scalars['ID']['input']>;
  main_product_posts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  main_tag?: InputMaybe<Scalars['ID']['input']>;
  market_status?: InputMaybe<Enum_Product_Market_Status>;
  model?: InputMaybe<Scalars['String']['input']>;
  model_en?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_en?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  variant?: InputMaybe<Array<InputMaybe<ComponentPricingVariantInput>>>;
};

export type ProductRelationResponseCollection = {
  __typename?: 'ProductRelationResponseCollection';
  data: Array<ProductEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  attribute?: Maybe<AttributeEntityResponse>;
  attributeCategories?: Maybe<AttributeCategoryEntityResponseCollection>;
  attributeCategory?: Maybe<AttributeCategoryEntityResponse>;
  attributeValue?: Maybe<AttributeValueEntityResponse>;
  attributeValues?: Maybe<AttributeValueEntityResponseCollection>;
  attributes?: Maybe<AttributeEntityResponseCollection>;
  brand?: Maybe<BrandEntityResponse>;
  brands?: Maybe<BrandEntityResponseCollection>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  cmsAnalyzerAnalyse?: Maybe<CmsAnalyzerAnalyseEntityResponse>;
  cmsAnalyzerAnalyses?: Maybe<CmsAnalyzerAnalyseEntityResponseCollection>;
  cmsAnalyzerMatch?: Maybe<CmsAnalyzerMatchEntityResponse>;
  cmsAnalyzerMatches?: Maybe<CmsAnalyzerMatchEntityResponseCollection>;
  cmsAnalyzerMedia?: Maybe<CmsAnalyzerMediaEntityResponse>;
  cmsAnalyzerMedias?: Maybe<CmsAnalyzerMediaEntityResponseCollection>;
  cmsAnalyzerSummaries?: Maybe<CmsAnalyzerSummaryEntityResponseCollection>;
  cmsAnalyzerSummary?: Maybe<CmsAnalyzerSummaryEntityResponse>;
  commentsComment?: Maybe<CommentsCommentEntityResponse>;
  commentsCommentReport?: Maybe<CommentsCommentReportEntityResponse>;
  commentsCommentReports?: Maybe<CommentsCommentReportEntityResponseCollection>;
  commentsComments?: Maybe<CommentsCommentEntityResponseCollection>;
  customContentTypeA?: Maybe<CustomContentTypeAEntityResponse>;
  customContentTypeAs?: Maybe<CustomContentTypeAEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  post?: Maybe<PostEntityResponse>;
  posts?: Maybe<PostEntityResponseCollection>;
  product?: Maybe<ProductEntityResponse>;
  products?: Maybe<ProductEntityResponseCollection>;
  ratingsRContentId?: Maybe<RatingsRContentIdEntityResponse>;
  ratingsRContentIds?: Maybe<RatingsRContentIdEntityResponseCollection>;
  ratingsReview?: Maybe<RatingsReviewEntityResponse>;
  ratingsReviews?: Maybe<RatingsReviewEntityResponseCollection>;
  staticPage?: Maybe<StaticPageEntityResponse>;
  staticPages?: Maybe<StaticPageEntityResponseCollection>;
  tag?: Maybe<TagEntityResponse>;
  tags?: Maybe<TagEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAttributeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAttributeCategoriesArgs = {
  filters?: InputMaybe<AttributeCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAttributeCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAttributeValueArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAttributeValuesArgs = {
  filters?: InputMaybe<AttributeValueFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAttributesArgs = {
  filters?: InputMaybe<AttributeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBrandArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryBrandsArgs = {
  filters?: InputMaybe<BrandFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCmsAnalyzerAnalyseArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCmsAnalyzerAnalysesArgs = {
  filters?: InputMaybe<CmsAnalyzerAnalyseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCmsAnalyzerMatchArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCmsAnalyzerMatchesArgs = {
  filters?: InputMaybe<CmsAnalyzerMatchFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCmsAnalyzerMediaArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCmsAnalyzerMediasArgs = {
  filters?: InputMaybe<CmsAnalyzerMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCmsAnalyzerSummariesArgs = {
  filters?: InputMaybe<CmsAnalyzerSummaryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCmsAnalyzerSummaryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommentsCommentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommentsCommentReportArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommentsCommentReportsArgs = {
  filters?: InputMaybe<CommentsCommentReportFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCommentsCommentsArgs = {
  filters?: InputMaybe<CommentsCommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCustomContentTypeAArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCustomContentTypeAsArgs = {
  filters?: InputMaybe<CustomContentTypeAFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPostArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRatingsRContentIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRatingsRContentIdsArgs = {
  filters?: InputMaybe<RatingsRContentIdFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRatingsReviewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRatingsReviewsArgs = {
  filters?: InputMaybe<RatingsReviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryStaticPageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryStaticPagesArgs = {
  filters?: InputMaybe<StaticPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTagArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RatingsRContentId = {
  __typename?: 'RatingsRContentId';
  average?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  reviews?: Maybe<RatingsReviewRelationResponseCollection>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type RatingsRContentIdReviewsArgs = {
  filters?: InputMaybe<RatingsReviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RatingsRContentIdEntity = {
  __typename?: 'RatingsRContentIdEntity';
  attributes?: Maybe<RatingsRContentId>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type RatingsRContentIdEntityResponse = {
  __typename?: 'RatingsRContentIdEntityResponse';
  data?: Maybe<RatingsRContentIdEntity>;
};

export type RatingsRContentIdEntityResponseCollection = {
  __typename?: 'RatingsRContentIdEntityResponseCollection';
  data: Array<RatingsRContentIdEntity>;
  meta: ResponseCollectionMeta;
};

export type RatingsRContentIdFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<RatingsRContentIdFiltersInput>>>;
  average?: InputMaybe<FloatFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<RatingsRContentIdFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RatingsRContentIdFiltersInput>>>;
  reviews?: InputMaybe<RatingsReviewFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type RatingsRContentIdInput = {
  average?: InputMaybe<Scalars['Float']['input']>;
  reviews?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type RatingsReview = {
  __typename?: 'RatingsReview';
  author?: Maybe<UsersPermissionsUserEntityResponse>;
  comment?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  related_to?: Maybe<RatingsRContentIdEntityResponse>;
  score?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RatingsReviewEntity = {
  __typename?: 'RatingsReviewEntity';
  attributes?: Maybe<RatingsReview>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type RatingsReviewEntityResponse = {
  __typename?: 'RatingsReviewEntityResponse';
  data?: Maybe<RatingsReviewEntity>;
};

export type RatingsReviewEntityResponseCollection = {
  __typename?: 'RatingsReviewEntityResponseCollection';
  data: Array<RatingsReviewEntity>;
  meta: ResponseCollectionMeta;
};

export type RatingsReviewFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<RatingsReviewFiltersInput>>>;
  author?: InputMaybe<UsersPermissionsUserFiltersInput>;
  comment?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<RatingsReviewFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RatingsReviewFiltersInput>>>;
  related_to?: InputMaybe<RatingsRContentIdFiltersInput>;
  score?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type RatingsReviewInput = {
  author?: InputMaybe<Scalars['ID']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  related_to?: InputMaybe<Scalars['ID']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
};

export type RatingsReviewRelationResponseCollection = {
  __typename?: 'RatingsReviewRelationResponseCollection';
  data: Array<RatingsReviewEntity>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StaticPage = {
  __typename?: 'StaticPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  main_text?: Maybe<Scalars['String']['output']>;
  page_name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type StaticPageEntity = {
  __typename?: 'StaticPageEntity';
  attributes?: Maybe<StaticPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type StaticPageEntityResponse = {
  __typename?: 'StaticPageEntityResponse';
  data?: Maybe<StaticPageEntity>;
};

export type StaticPageEntityResponseCollection = {
  __typename?: 'StaticPageEntityResponseCollection';
  data: Array<StaticPageEntity>;
  meta: ResponseCollectionMeta;
};

export type StaticPageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<StaticPageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  main_text?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<StaticPageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<StaticPageFiltersInput>>>;
  page_name?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type StaticPageInput = {
  main_text?: InputMaybe<Scalars['String']['input']>;
  page_name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<TagRelationResponseCollection>;
  main_tag_posts?: Maybe<PostRelationResponseCollection>;
  name: Scalars['String']['output'];
  posts?: Maybe<PostRelationResponseCollection>;
  products?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TagLocalizationsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TagMain_Tag_PostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TagPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TagProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TagEntity = {
  __typename?: 'TagEntity';
  attributes?: Maybe<Tag>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TagEntityResponse = {
  __typename?: 'TagEntityResponse';
  data?: Maybe<TagEntity>;
};

export type TagEntityResponseCollection = {
  __typename?: 'TagEntityResponseCollection';
  data: Array<TagEntity>;
  meta: ResponseCollectionMeta;
};

export type TagFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<TagFiltersInput>;
  main_tag_posts?: InputMaybe<PostFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  posts?: InputMaybe<PostFiltersInput>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TagInput = {
  main_tag_posts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection';
  data: Array<TagEntity>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  main_image?: Maybe<UploadFileEntityResponse>;
  name?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  main_image?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type AboutUsDataQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutUsDataQuery = { __typename?: 'Query', staticPage?: { __typename?: 'StaticPageEntityResponse', data?: { __typename?: 'StaticPageEntity', attributes?: { __typename?: 'StaticPage', main_text?: string | null } | null } | null } | null };

export type ComparisonProductListQueryVariables = Exact<{
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>> | InputMaybe<Scalars['ID']['input']>>;
}>;


export type ComparisonProductListQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', name: string, name_en?: string | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, variant?: Array<{ __typename?: 'ComponentPricingVariant', id: string, price?: any | null } | null> | null, attribute_values?: { __typename?: 'AttributeValueRelationResponseCollection', data: Array<{ __typename?: 'AttributeValueEntity', attributes?: { __typename?: 'AttributeValue', value: string, etc?: string | null, attribute_id?: { __typename?: 'AttributeEntityResponse', data?: { __typename?: 'AttributeEntity', id?: string | null, attributes?: { __typename?: 'Attribute', name: string, attr_cat_priority?: number | null, attribute_category?: { __typename?: 'AttributeCategoryEntityResponse', data?: { __typename?: 'AttributeCategoryEntity', id?: string | null, attributes?: { __typename?: 'AttributeCategory', priority?: number | null, title?: string | null } | null } | null } | null } | null } | null } | null } | null }> } | null } | null }> } | null };

export type ContactUsDataQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactUsDataQuery = { __typename?: 'Query', staticPage?: { __typename?: 'StaticPageEntityResponse', data?: { __typename?: 'StaticPageEntity', attributes?: { __typename?: 'StaticPage', main_text?: string | null } | null } | null } | null };

export type ArticleListQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ArticleListQuery = { __typename?: 'Query', posts?: { __typename?: 'PostEntityResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', comment?: any | null, titre?: string | null, main_text?: string | null, source?: string | null, is_hot?: boolean | null, reading_time?: string | null, summary?: string | null, publishedAt?: any | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null, formats?: any | null } | null } | null } | null } | null }> } | null };

export type NewsListQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  filters?: InputMaybe<PostFiltersInput>;
}>;


export type NewsListQuery = { __typename?: 'Query', posts?: { __typename?: 'PostEntityResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', titre?: string | null, publishedAt?: any | null, main_tag?: { __typename?: 'TagEntityResponse', data?: { __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', name: string } | null } | null } | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null, formats?: any | null } | null } | null } | null } | null }> } | null };

export type TechReviewListQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  filters?: InputMaybe<PostFiltersInput>;
}>;


export type TechReviewListQuery = { __typename?: 'Query', posts?: { __typename?: 'PostEntityResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', titre?: string | null, publishedAt?: any | null, main_tag?: { __typename?: 'TagEntityResponse', data?: { __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', name: string } | null } | null } | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null, formats?: any | null } | null } | null } | null } | null }> } | null };

export type ProductListQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductListQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', name: string, name_en?: string | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null, formats?: any | null } | null } | null } | null, attribute_values?: { __typename?: 'AttributeValueRelationResponseCollection', data: Array<{ __typename?: 'AttributeValueEntity', attributes?: { __typename?: 'AttributeValue', value: string } | null }> } | null, variant?: Array<{ __typename?: 'ComponentPricingVariant', id: string, price?: any | null } | null> | null } | null }> } | null };

export type PrivacyDataQueryVariables = Exact<{ [key: string]: never; }>;


export type PrivacyDataQuery = { __typename?: 'Query', staticPage?: { __typename?: 'StaticPageEntityResponse', data?: { __typename?: 'StaticPageEntity', attributes?: { __typename?: 'StaticPage', main_text?: string | null } | null } | null } | null };

export type TermsAndConditionDataQueryVariables = Exact<{ [key: string]: never; }>;


export type TermsAndConditionDataQuery = { __typename?: 'Query', staticPage?: { __typename?: 'StaticPageEntityResponse', data?: { __typename?: 'StaticPageEntity', attributes?: { __typename?: 'StaticPage', main_text?: string | null } | null } | null } | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null } };

export type RegisterMutationVariables = Exact<{
  userName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null } };

export type ArticleDetailQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ArticleDetailQuery = { __typename?: 'Query', post?: { __typename?: 'PostEntityResponse', data?: { __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', titre?: string | null, main_text?: string | null, source?: string | null, reading_time?: string | null, summary?: string | null, publishedAt?: any | null, main_tag?: { __typename?: 'TagEntityResponse', data?: { __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string, main_tag_posts?: { __typename?: 'PostRelationResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', titre?: string | null, publishedAt?: any | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null } | null } | null } | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null } | null } | null };

export type TrendArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type TrendArticlesQuery = { __typename?: 'Query', posts?: { __typename?: 'PostEntityResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', titre?: string | null, publishedAt?: any | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null };

export type BrandDetailQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type BrandDetailQuery = { __typename?: 'Query', brand?: { __typename?: 'BrandEntityResponse', data?: { __typename?: 'BrandEntity', id?: string | null, attributes?: { __typename?: 'Brand', persian_name: string, description?: string | null, english_name: string, brand_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null }, background_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, posts?: { __typename?: 'PostRelationResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', type?: Enum_Post_Type | null } | null }> } | null } | null } | null } | null };

export type ProductListBrandQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ProductListBrandQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', name: string, name_en?: string | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, variant?: Array<{ __typename?: 'ComponentPricingVariant', id: string, price?: any | null } | null> | null } | null }> } | null };

export type BrandDetailSeoQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type BrandDetailSeoQuery = { __typename?: 'Query', brand?: { __typename?: 'BrandEntityResponse', data?: { __typename?: 'BrandEntity', id?: string | null, attributes?: { __typename?: 'Brand', persian_name: string, english_name: string, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, slug?: string | null, canonicalURL?: string | null, metaRobots?: string | null } | null } | null } | null } | null };

export type ArticleBarQueryVariables = Exact<{ [key: string]: never; }>;


export type ArticleBarQuery = { __typename?: 'Query', posts?: { __typename?: 'PostEntityResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', comment?: any | null, titre?: string | null, main_text?: string | null, source?: string | null, is_hot?: boolean | null, reading_time?: string | null, summary?: string | null, publishedAt?: any | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null, formats?: any | null } | null } | null } | null } | null }> } | null };

export type BrandsQueryVariables = Exact<{ [key: string]: never; }>;


export type BrandsQuery = { __typename?: 'Query', brands?: { __typename?: 'BrandEntityResponseCollection', data: Array<{ __typename?: 'BrandEntity', id?: string | null, attributes?: { __typename?: 'Brand', priority?: number | null, persian_name: string, description?: string | null, english_name: string, brand_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null }, background_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null }> } | null };

export type NewsBarQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type NewsBarQueryQuery = { __typename?: 'Query', posts?: { __typename?: 'PostEntityResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', titre?: string | null, publishedAt?: any | null, main_tag?: { __typename?: 'TagEntityResponse', data?: { __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', name: string } | null } | null } | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null, formats?: any | null } | null } | null } | null } | null }> } | null };

export type ProductBarQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductBarQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', name: string, name_en?: string | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null, formats?: any | null } | null } | null } | null, attribute_values?: { __typename?: 'AttributeValueRelationResponseCollection', data: Array<{ __typename?: 'AttributeValueEntity', attributes?: { __typename?: 'AttributeValue', value: string } | null }> } | null, variant?: Array<{ __typename?: 'ComponentPricingVariant', id: string, price?: any | null } | null> | null } | null }> } | null };

export type ReviewBarQueryVariables = Exact<{ [key: string]: never; }>;


export type ReviewBarQuery = { __typename?: 'Query', posts?: { __typename?: 'PostEntityResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', titre?: string | null, publishedAt?: any | null, main_tag?: { __typename?: 'TagEntityResponse', data?: { __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', name: string } | null } | null } | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null, formats?: any | null } | null } | null } | null } | null }> } | null };

export type TrendPostQueryVariables = Exact<{ [key: string]: never; }>;


export type TrendPostQuery = { __typename?: 'Query', posts?: { __typename?: 'PostEntityResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', titre?: string | null, publishedAt?: any | null, type?: Enum_Post_Type | null, reading_time?: string | null, main_tag?: { __typename?: 'TagEntityResponse', data?: { __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', name: string } | null } | null } | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null, formats?: any | null } | null } | null } | null } | null }> } | null };

export type NewsDetailQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type NewsDetailQuery = { __typename?: 'Query', post?: { __typename?: 'PostEntityResponse', data?: { __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', titre?: string | null, main_text?: string | null, source?: string | null, reading_time?: string | null, summary?: string | null, publishedAt?: any | null, main_tag?: { __typename?: 'TagEntityResponse', data?: { __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string, main_tag_posts?: { __typename?: 'PostRelationResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', titre?: string | null, publishedAt?: any | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null, formats?: any | null } | null } | null } | null } | null }> } | null } | null } | null } | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null } | null } | null };

export type TrendNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type TrendNewsQuery = { __typename?: 'Query', posts?: { __typename?: 'PostEntityResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', titre?: string | null, publishedAt?: any | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null, formats?: any | null } | null } | null } | null } | null }> } | null };

export type RelatedNewsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type RelatedNewsQuery = { __typename?: 'Query', posts?: { __typename?: 'PostEntityResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', titre?: string | null, publishedAt?: any | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null } | null } | null } | null } | null }> } | null };

export type ProductDetailQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ProductDetailQuery = { __typename?: 'Query', product?: { __typename?: 'ProductEntityResponse', data?: { __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', name: string, market_status?: Enum_Product_Market_Status | null, attribute_values?: { __typename?: 'AttributeValueRelationResponseCollection', data: Array<{ __typename?: 'AttributeValueEntity', attributes?: { __typename?: 'AttributeValue', value: string, attribute_id?: { __typename?: 'AttributeEntityResponse', data?: { __typename?: 'AttributeEntity', attributes?: { __typename?: 'Attribute', name: string, is_featured?: boolean | null, featured_priority?: number | null, attr_cat_priority?: number | null, attribute_category?: { __typename?: 'AttributeCategoryEntityResponse', data?: { __typename?: 'AttributeCategoryEntity', id?: string | null, attributes?: { __typename?: 'AttributeCategory', title?: string | null, priority?: number | null } | null } | null } | null } | null } | null } | null } | null }> } | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null, formats?: any | null } | null } | null } | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null }> } | null, brand?: { __typename?: 'BrandEntityResponse', data?: { __typename?: 'BrandEntity', attributes?: { __typename?: 'Brand', persian_name: string, products?: { __typename?: 'ProductRelationResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', name: string, attribute_values?: { __typename?: 'AttributeValueRelationResponseCollection', data: Array<{ __typename?: 'AttributeValueEntity', attributes?: { __typename?: 'AttributeValue', value: string } | null }> } | null, variant?: Array<{ __typename?: 'ComponentPricingVariant', id: string, price?: any | null } | null> | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null } | null } | null } | null, posts?: { __typename?: 'PostRelationResponseCollection', data: Array<{ __typename?: 'PostEntity', attributes?: { __typename?: 'Post', titre?: string | null, publishedAt?: any | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null, variant?: Array<{ __typename?: 'ComponentPricingVariant', id: string, price?: any | null } | null> | null } | null } | null } | null };

export type ProductDetailBarQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ProductDetailBarQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', name: string, name_en?: string | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null, attribute_values?: { __typename?: 'AttributeValueRelationResponseCollection', data: Array<{ __typename?: 'AttributeValueEntity', attributes?: { __typename?: 'AttributeValue', value: string } | null }> } | null, variant?: Array<{ __typename?: 'ComponentPricingVariant', id: string, price?: any | null } | null> | null } | null }> } | null };

export type ProductDetailSeoQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ProductDetailSeoQuery = { __typename?: 'Query', product?: { __typename?: 'ProductEntityResponse', data?: { __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', name: string, name_en?: string | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, slug?: string | null, canonicalURL?: string | null, metaRobots?: string | null } | null } | null } | null } | null };

export type TechReviewDetailQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type TechReviewDetailQuery = { __typename?: 'Query', post?: { __typename?: 'PostEntityResponse', data?: { __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', titre?: string | null, main_text?: string | null, source?: string | null, reading_time?: string | null, summary?: string | null, publishedAt?: any | null, main_tag?: { __typename?: 'TagEntityResponse', data?: { __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string, main_tag_posts?: { __typename?: 'PostRelationResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', titre?: string | null, publishedAt?: any | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null } | null } | null } | null } | null }> } | null } | null } | null } | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null } | null } | null } | null } | null } | null } | null };

export type ReviewDetailBarQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ReviewDetailBarQuery = { __typename?: 'Query', posts?: { __typename?: 'PostEntityResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', titre?: string | null, publishedAt?: any | null, main_tag?: { __typename?: 'TagEntityResponse', data?: { __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', name: string } | null } | null } | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null } | null } | null } | null } | null }> } | null };

export type ReviewDetailSeoQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ReviewDetailSeoQuery = { __typename?: 'Query', post?: { __typename?: 'PostEntityResponse', data?: { __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', titre?: string | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, slug?: string | null, canonicalURL?: string | null, metaRobots?: string | null } | null } | null } | null } | null };


export const AboutUsDataDocument = gql`
    query AboutUsData {
  staticPage(id: "5") {
    data {
      attributes {
        main_text
      }
    }
  }
}
    `;

/**
 * __useAboutUsDataQuery__
 *
 * To run a query within a React component, call `useAboutUsDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useAboutUsDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAboutUsDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useAboutUsDataQuery(baseOptions?: Apollo.QueryHookOptions<AboutUsDataQuery, AboutUsDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AboutUsDataQuery, AboutUsDataQueryVariables>(AboutUsDataDocument, options);
      }
export function useAboutUsDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AboutUsDataQuery, AboutUsDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AboutUsDataQuery, AboutUsDataQueryVariables>(AboutUsDataDocument, options);
        }
export function useAboutUsDataSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AboutUsDataQuery, AboutUsDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AboutUsDataQuery, AboutUsDataQueryVariables>(AboutUsDataDocument, options);
        }
export type AboutUsDataQueryHookResult = ReturnType<typeof useAboutUsDataQuery>;
export type AboutUsDataLazyQueryHookResult = ReturnType<typeof useAboutUsDataLazyQuery>;
export type AboutUsDataSuspenseQueryHookResult = ReturnType<typeof useAboutUsDataSuspenseQuery>;
export type AboutUsDataQueryResult = Apollo.QueryResult<AboutUsDataQuery, AboutUsDataQueryVariables>;
export const ComparisonProductListDocument = gql`
    query ComparisonProductList($ids: [ID]) {
  products(filters: {id: {in: $ids}}) {
    data {
      id
      attributes {
        name
        name_en
        main_image {
          data {
            attributes {
              url
            }
          }
        }
        variant(pagination: {page: 1, pageSize: 40}) {
          id
          price
        }
        attribute_values(pagination: {page: 1, pageSize: 60}) {
          data {
            attributes {
              value
              etc
              attribute_id {
                data {
                  id
                  attributes {
                    name
                    attr_cat_priority
                    attribute_category {
                      data {
                        id
                        attributes {
                          priority
                          title
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useComparisonProductListQuery__
 *
 * To run a query within a React component, call `useComparisonProductListQuery` and pass it any options that fit your needs.
 * When your component renders, `useComparisonProductListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useComparisonProductListQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useComparisonProductListQuery(baseOptions?: Apollo.QueryHookOptions<ComparisonProductListQuery, ComparisonProductListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ComparisonProductListQuery, ComparisonProductListQueryVariables>(ComparisonProductListDocument, options);
      }
export function useComparisonProductListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ComparisonProductListQuery, ComparisonProductListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ComparisonProductListQuery, ComparisonProductListQueryVariables>(ComparisonProductListDocument, options);
        }
export function useComparisonProductListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ComparisonProductListQuery, ComparisonProductListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ComparisonProductListQuery, ComparisonProductListQueryVariables>(ComparisonProductListDocument, options);
        }
export type ComparisonProductListQueryHookResult = ReturnType<typeof useComparisonProductListQuery>;
export type ComparisonProductListLazyQueryHookResult = ReturnType<typeof useComparisonProductListLazyQuery>;
export type ComparisonProductListSuspenseQueryHookResult = ReturnType<typeof useComparisonProductListSuspenseQuery>;
export type ComparisonProductListQueryResult = Apollo.QueryResult<ComparisonProductListQuery, ComparisonProductListQueryVariables>;
export const ContactUsDataDocument = gql`
    query ContactUsData {
  staticPage(id: "3") {
    data {
      attributes {
        main_text
      }
    }
  }
}
    `;

/**
 * __useContactUsDataQuery__
 *
 * To run a query within a React component, call `useContactUsDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactUsDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactUsDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useContactUsDataQuery(baseOptions?: Apollo.QueryHookOptions<ContactUsDataQuery, ContactUsDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContactUsDataQuery, ContactUsDataQueryVariables>(ContactUsDataDocument, options);
      }
export function useContactUsDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContactUsDataQuery, ContactUsDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContactUsDataQuery, ContactUsDataQueryVariables>(ContactUsDataDocument, options);
        }
export function useContactUsDataSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ContactUsDataQuery, ContactUsDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ContactUsDataQuery, ContactUsDataQueryVariables>(ContactUsDataDocument, options);
        }
export type ContactUsDataQueryHookResult = ReturnType<typeof useContactUsDataQuery>;
export type ContactUsDataLazyQueryHookResult = ReturnType<typeof useContactUsDataLazyQuery>;
export type ContactUsDataSuspenseQueryHookResult = ReturnType<typeof useContactUsDataSuspenseQuery>;
export type ContactUsDataQueryResult = Apollo.QueryResult<ContactUsDataQuery, ContactUsDataQueryVariables>;
export const ArticleListDocument = gql`
    query ArticleList($page: Int, $pageSize: Int) {
  posts(
    filters: {type: {eq: "article"}}
    sort: ["publishedAt:desc"]
    pagination: {page: $page, pageSize: $pageSize}
  ) {
    data {
      id
      attributes {
        comment
        titre
        main_text
        source
        is_hot
        reading_time
        summary
        publishedAt
        main_image {
          data {
            id
            attributes {
              url
              previewUrl
              formats
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useArticleListQuery__
 *
 * To run a query within a React component, call `useArticleListQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleListQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useArticleListQuery(baseOptions?: Apollo.QueryHookOptions<ArticleListQuery, ArticleListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticleListQuery, ArticleListQueryVariables>(ArticleListDocument, options);
      }
export function useArticleListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleListQuery, ArticleListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticleListQuery, ArticleListQueryVariables>(ArticleListDocument, options);
        }
export function useArticleListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ArticleListQuery, ArticleListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ArticleListQuery, ArticleListQueryVariables>(ArticleListDocument, options);
        }
export type ArticleListQueryHookResult = ReturnType<typeof useArticleListQuery>;
export type ArticleListLazyQueryHookResult = ReturnType<typeof useArticleListLazyQuery>;
export type ArticleListSuspenseQueryHookResult = ReturnType<typeof useArticleListSuspenseQuery>;
export type ArticleListQueryResult = Apollo.QueryResult<ArticleListQuery, ArticleListQueryVariables>;
export const NewsListDocument = gql`
    query NewsList($page: Int, $pageSize: Int, $filters: PostFiltersInput) {
  posts(
    filters: $filters
    sort: ["publishedAt:desc"]
    pagination: {page: $page, pageSize: $pageSize}
  ) {
    data {
      id
      attributes {
        titre
        publishedAt
        main_tag {
          data {
            attributes {
              name
            }
          }
        }
        main_image {
          data {
            attributes {
              url
              previewUrl
              formats
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useNewsListQuery__
 *
 * To run a query within a React component, call `useNewsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsListQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useNewsListQuery(baseOptions?: Apollo.QueryHookOptions<NewsListQuery, NewsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NewsListQuery, NewsListQueryVariables>(NewsListDocument, options);
      }
export function useNewsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewsListQuery, NewsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NewsListQuery, NewsListQueryVariables>(NewsListDocument, options);
        }
export function useNewsListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<NewsListQuery, NewsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<NewsListQuery, NewsListQueryVariables>(NewsListDocument, options);
        }
export type NewsListQueryHookResult = ReturnType<typeof useNewsListQuery>;
export type NewsListLazyQueryHookResult = ReturnType<typeof useNewsListLazyQuery>;
export type NewsListSuspenseQueryHookResult = ReturnType<typeof useNewsListSuspenseQuery>;
export type NewsListQueryResult = Apollo.QueryResult<NewsListQuery, NewsListQueryVariables>;
export const TechReviewListDocument = gql`
    query TechReviewList($page: Int, $pageSize: Int, $filters: PostFiltersInput) {
  posts(
    sort: ["publishedAt:desc"]
    filters: $filters
    pagination: {page: $page, pageSize: $pageSize}
  ) {
    data {
      id
      attributes {
        titre
        publishedAt
        main_tag {
          data {
            attributes {
              name
            }
          }
        }
        main_image {
          data {
            attributes {
              url
              previewUrl
              formats
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useTechReviewListQuery__
 *
 * To run a query within a React component, call `useTechReviewListQuery` and pass it any options that fit your needs.
 * When your component renders, `useTechReviewListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTechReviewListQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useTechReviewListQuery(baseOptions?: Apollo.QueryHookOptions<TechReviewListQuery, TechReviewListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TechReviewListQuery, TechReviewListQueryVariables>(TechReviewListDocument, options);
      }
export function useTechReviewListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TechReviewListQuery, TechReviewListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TechReviewListQuery, TechReviewListQueryVariables>(TechReviewListDocument, options);
        }
export function useTechReviewListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TechReviewListQuery, TechReviewListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TechReviewListQuery, TechReviewListQueryVariables>(TechReviewListDocument, options);
        }
export type TechReviewListQueryHookResult = ReturnType<typeof useTechReviewListQuery>;
export type TechReviewListLazyQueryHookResult = ReturnType<typeof useTechReviewListLazyQuery>;
export type TechReviewListSuspenseQueryHookResult = ReturnType<typeof useTechReviewListSuspenseQuery>;
export type TechReviewListQueryResult = Apollo.QueryResult<TechReviewListQuery, TechReviewListQueryVariables>;
export const ProductListDocument = gql`
    query ProductList($page: Int, $pageSize: Int) {
  products(
    sort: ["publishedAt:desc"]
    pagination: {page: $page, pageSize: $pageSize}
  ) {
    data {
      id
      attributes {
        name
        name_en
        main_image {
          data {
            attributes {
              url
              previewUrl
              formats
            }
          }
        }
        attribute_values {
          data {
            attributes {
              value
            }
          }
        }
        variant(pagination: {page: 1, pageSize: 30}) {
          id
          price
        }
      }
    }
  }
}
    `;

/**
 * __useProductListQuery__
 *
 * To run a query within a React component, call `useProductListQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductListQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useProductListQuery(baseOptions?: Apollo.QueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductListQuery, ProductListQueryVariables>(ProductListDocument, options);
      }
export function useProductListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductListQuery, ProductListQueryVariables>(ProductListDocument, options);
        }
export function useProductListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductListQuery, ProductListQueryVariables>(ProductListDocument, options);
        }
export type ProductListQueryHookResult = ReturnType<typeof useProductListQuery>;
export type ProductListLazyQueryHookResult = ReturnType<typeof useProductListLazyQuery>;
export type ProductListSuspenseQueryHookResult = ReturnType<typeof useProductListSuspenseQuery>;
export type ProductListQueryResult = Apollo.QueryResult<ProductListQuery, ProductListQueryVariables>;
export const PrivacyDataDocument = gql`
    query PrivacyData {
  staticPage(id: "2") {
    data {
      attributes {
        main_text
      }
    }
  }
}
    `;

/**
 * __usePrivacyDataQuery__
 *
 * To run a query within a React component, call `usePrivacyDataQuery` and pass it any options that fit your needs.
 * When your component renders, `usePrivacyDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePrivacyDataQuery({
 *   variables: {
 *   },
 * });
 */
export function usePrivacyDataQuery(baseOptions?: Apollo.QueryHookOptions<PrivacyDataQuery, PrivacyDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PrivacyDataQuery, PrivacyDataQueryVariables>(PrivacyDataDocument, options);
      }
export function usePrivacyDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PrivacyDataQuery, PrivacyDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PrivacyDataQuery, PrivacyDataQueryVariables>(PrivacyDataDocument, options);
        }
export function usePrivacyDataSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PrivacyDataQuery, PrivacyDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PrivacyDataQuery, PrivacyDataQueryVariables>(PrivacyDataDocument, options);
        }
export type PrivacyDataQueryHookResult = ReturnType<typeof usePrivacyDataQuery>;
export type PrivacyDataLazyQueryHookResult = ReturnType<typeof usePrivacyDataLazyQuery>;
export type PrivacyDataSuspenseQueryHookResult = ReturnType<typeof usePrivacyDataSuspenseQuery>;
export type PrivacyDataQueryResult = Apollo.QueryResult<PrivacyDataQuery, PrivacyDataQueryVariables>;
export const TermsAndConditionDataDocument = gql`
    query TermsAndConditionData {
  staticPage(id: "1") {
    data {
      attributes {
        main_text
      }
    }
  }
}
    `;

/**
 * __useTermsAndConditionDataQuery__
 *
 * To run a query within a React component, call `useTermsAndConditionDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useTermsAndConditionDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTermsAndConditionDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useTermsAndConditionDataQuery(baseOptions?: Apollo.QueryHookOptions<TermsAndConditionDataQuery, TermsAndConditionDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TermsAndConditionDataQuery, TermsAndConditionDataQueryVariables>(TermsAndConditionDataDocument, options);
      }
export function useTermsAndConditionDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TermsAndConditionDataQuery, TermsAndConditionDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TermsAndConditionDataQuery, TermsAndConditionDataQueryVariables>(TermsAndConditionDataDocument, options);
        }
export function useTermsAndConditionDataSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TermsAndConditionDataQuery, TermsAndConditionDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TermsAndConditionDataQuery, TermsAndConditionDataQueryVariables>(TermsAndConditionDataDocument, options);
        }
export type TermsAndConditionDataQueryHookResult = ReturnType<typeof useTermsAndConditionDataQuery>;
export type TermsAndConditionDataLazyQueryHookResult = ReturnType<typeof useTermsAndConditionDataLazyQuery>;
export type TermsAndConditionDataSuspenseQueryHookResult = ReturnType<typeof useTermsAndConditionDataSuspenseQuery>;
export type TermsAndConditionDataQueryResult = Apollo.QueryResult<TermsAndConditionDataQuery, TermsAndConditionDataQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(input: {identifier: $email, password: $password}) {
    jwt
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($userName: String!, $email: String!, $password: String!) {
  register(input: {username: $userName, email: $email, password: $password}) {
    jwt
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      userName: // value for 'userName'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const ArticleDetailDocument = gql`
    query ArticleDetail($id: ID) {
  post(id: $id) {
    data {
      id
      attributes {
        titre
        main_text
        source
        reading_time
        summary
        publishedAt
        main_tag {
          data {
            id
            attributes {
              name
              main_tag_posts(
                filters: {id: {not: {eq: $id}}, type: {eq: "article"}}
                pagination: {page: 1, pageSize: 8}
                sort: ["publishedAt:desc"]
              ) {
                data {
                  id
                  attributes {
                    titre
                    main_image {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                    publishedAt
                  }
                }
              }
            }
          }
        }
        main_image {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useArticleDetailQuery__
 *
 * To run a query within a React component, call `useArticleDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArticleDetailQuery(baseOptions?: Apollo.QueryHookOptions<ArticleDetailQuery, ArticleDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticleDetailQuery, ArticleDetailQueryVariables>(ArticleDetailDocument, options);
      }
export function useArticleDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleDetailQuery, ArticleDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticleDetailQuery, ArticleDetailQueryVariables>(ArticleDetailDocument, options);
        }
export function useArticleDetailSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ArticleDetailQuery, ArticleDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ArticleDetailQuery, ArticleDetailQueryVariables>(ArticleDetailDocument, options);
        }
export type ArticleDetailQueryHookResult = ReturnType<typeof useArticleDetailQuery>;
export type ArticleDetailLazyQueryHookResult = ReturnType<typeof useArticleDetailLazyQuery>;
export type ArticleDetailSuspenseQueryHookResult = ReturnType<typeof useArticleDetailSuspenseQuery>;
export type ArticleDetailQueryResult = Apollo.QueryResult<ArticleDetailQuery, ArticleDetailQueryVariables>;
export const TrendArticlesDocument = gql`
    query TrendArticles {
  posts(
    filters: {is_hot: {eq: true}, type: {eq: "article"}}
    pagination: {page: 1, pageSize: 10}
    sort: ["publishedAt:desc"]
  ) {
    data {
      id
      attributes {
        titre
        publishedAt
        main_image {
          data {
            id
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useTrendArticlesQuery__
 *
 * To run a query within a React component, call `useTrendArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrendArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrendArticlesQuery({
 *   variables: {
 *   },
 * });
 */
export function useTrendArticlesQuery(baseOptions?: Apollo.QueryHookOptions<TrendArticlesQuery, TrendArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrendArticlesQuery, TrendArticlesQueryVariables>(TrendArticlesDocument, options);
      }
export function useTrendArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrendArticlesQuery, TrendArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrendArticlesQuery, TrendArticlesQueryVariables>(TrendArticlesDocument, options);
        }
export function useTrendArticlesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TrendArticlesQuery, TrendArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TrendArticlesQuery, TrendArticlesQueryVariables>(TrendArticlesDocument, options);
        }
export type TrendArticlesQueryHookResult = ReturnType<typeof useTrendArticlesQuery>;
export type TrendArticlesLazyQueryHookResult = ReturnType<typeof useTrendArticlesLazyQuery>;
export type TrendArticlesSuspenseQueryHookResult = ReturnType<typeof useTrendArticlesSuspenseQuery>;
export type TrendArticlesQueryResult = Apollo.QueryResult<TrendArticlesQuery, TrendArticlesQueryVariables>;
export const BrandDetailDocument = gql`
    query BrandDetail($id: ID) {
  brand(id: $id) {
    data {
      id
      attributes {
        persian_name
        brand_image {
          data {
            attributes {
              url
              previewUrl
            }
          }
        }
        background_image {
          data {
            attributes {
              url
            }
          }
        }
        description
        english_name
        posts {
          data {
            id
            attributes {
              type
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useBrandDetailQuery__
 *
 * To run a query within a React component, call `useBrandDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrandDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrandDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBrandDetailQuery(baseOptions?: Apollo.QueryHookOptions<BrandDetailQuery, BrandDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BrandDetailQuery, BrandDetailQueryVariables>(BrandDetailDocument, options);
      }
export function useBrandDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BrandDetailQuery, BrandDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BrandDetailQuery, BrandDetailQueryVariables>(BrandDetailDocument, options);
        }
export function useBrandDetailSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<BrandDetailQuery, BrandDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BrandDetailQuery, BrandDetailQueryVariables>(BrandDetailDocument, options);
        }
export type BrandDetailQueryHookResult = ReturnType<typeof useBrandDetailQuery>;
export type BrandDetailLazyQueryHookResult = ReturnType<typeof useBrandDetailLazyQuery>;
export type BrandDetailSuspenseQueryHookResult = ReturnType<typeof useBrandDetailSuspenseQuery>;
export type BrandDetailQueryResult = Apollo.QueryResult<BrandDetailQuery, BrandDetailQueryVariables>;
export const ProductListBrandDocument = gql`
    query ProductListBrand($page: Int, $pageSize: Int, $id: ID) {
  products(
    sort: ["publishedAt:desc"]
    pagination: {page: $page, pageSize: $pageSize}
    filters: {brand: {id: {eq: $id}}}
  ) {
    data {
      id
      attributes {
        name
        name_en
        main_image {
          data {
            attributes {
              url
              previewUrl
            }
          }
        }
        variant(pagination: {page: 1, pageSize: 40}) {
          id
          price
        }
      }
    }
  }
}
    `;

/**
 * __useProductListBrandQuery__
 *
 * To run a query within a React component, call `useProductListBrandQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductListBrandQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductListBrandQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductListBrandQuery(baseOptions?: Apollo.QueryHookOptions<ProductListBrandQuery, ProductListBrandQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductListBrandQuery, ProductListBrandQueryVariables>(ProductListBrandDocument, options);
      }
export function useProductListBrandLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductListBrandQuery, ProductListBrandQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductListBrandQuery, ProductListBrandQueryVariables>(ProductListBrandDocument, options);
        }
export function useProductListBrandSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductListBrandQuery, ProductListBrandQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductListBrandQuery, ProductListBrandQueryVariables>(ProductListBrandDocument, options);
        }
export type ProductListBrandQueryHookResult = ReturnType<typeof useProductListBrandQuery>;
export type ProductListBrandLazyQueryHookResult = ReturnType<typeof useProductListBrandLazyQuery>;
export type ProductListBrandSuspenseQueryHookResult = ReturnType<typeof useProductListBrandSuspenseQuery>;
export type ProductListBrandQueryResult = Apollo.QueryResult<ProductListBrandQuery, ProductListBrandQueryVariables>;
export const BrandDetailSeoDocument = gql`
    query BrandDetailSeo($id: ID) {
  brand(id: $id) {
    data {
      id
      attributes {
        seo {
          metaTitle
          metaDescription
          slug
          canonicalURL
          metaRobots
        }
        persian_name
        english_name
      }
    }
  }
}
    `;

/**
 * __useBrandDetailSeoQuery__
 *
 * To run a query within a React component, call `useBrandDetailSeoQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrandDetailSeoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrandDetailSeoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBrandDetailSeoQuery(baseOptions?: Apollo.QueryHookOptions<BrandDetailSeoQuery, BrandDetailSeoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BrandDetailSeoQuery, BrandDetailSeoQueryVariables>(BrandDetailSeoDocument, options);
      }
export function useBrandDetailSeoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BrandDetailSeoQuery, BrandDetailSeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BrandDetailSeoQuery, BrandDetailSeoQueryVariables>(BrandDetailSeoDocument, options);
        }
export function useBrandDetailSeoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<BrandDetailSeoQuery, BrandDetailSeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BrandDetailSeoQuery, BrandDetailSeoQueryVariables>(BrandDetailSeoDocument, options);
        }
export type BrandDetailSeoQueryHookResult = ReturnType<typeof useBrandDetailSeoQuery>;
export type BrandDetailSeoLazyQueryHookResult = ReturnType<typeof useBrandDetailSeoLazyQuery>;
export type BrandDetailSeoSuspenseQueryHookResult = ReturnType<typeof useBrandDetailSeoSuspenseQuery>;
export type BrandDetailSeoQueryResult = Apollo.QueryResult<BrandDetailSeoQuery, BrandDetailSeoQueryVariables>;
export const ArticleBarDocument = gql`
    query ArticleBar {
  posts(
    filters: {type: {eq: "article"}}
    sort: ["publishedAt:desc"]
    pagination: {pageSize: 10}
  ) {
    data {
      id
      attributes {
        comment
        titre
        main_text
        source
        is_hot
        reading_time
        summary
        publishedAt
        main_image {
          data {
            id
            attributes {
              url
              previewUrl
              formats
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useArticleBarQuery__
 *
 * To run a query within a React component, call `useArticleBarQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleBarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleBarQuery({
 *   variables: {
 *   },
 * });
 */
export function useArticleBarQuery(baseOptions?: Apollo.QueryHookOptions<ArticleBarQuery, ArticleBarQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticleBarQuery, ArticleBarQueryVariables>(ArticleBarDocument, options);
      }
export function useArticleBarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleBarQuery, ArticleBarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticleBarQuery, ArticleBarQueryVariables>(ArticleBarDocument, options);
        }
export function useArticleBarSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ArticleBarQuery, ArticleBarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ArticleBarQuery, ArticleBarQueryVariables>(ArticleBarDocument, options);
        }
export type ArticleBarQueryHookResult = ReturnType<typeof useArticleBarQuery>;
export type ArticleBarLazyQueryHookResult = ReturnType<typeof useArticleBarLazyQuery>;
export type ArticleBarSuspenseQueryHookResult = ReturnType<typeof useArticleBarSuspenseQuery>;
export type ArticleBarQueryResult = Apollo.QueryResult<ArticleBarQuery, ArticleBarQueryVariables>;
export const BrandsDocument = gql`
    query Brands {
  brands(pagination: {page: 1, pageSize: 8}, sort: ["priority:desc"]) {
    data {
      id
      attributes {
        brand_image {
          data {
            id
            attributes {
              url
              previewUrl
            }
          }
        }
        priority
        persian_name
        background_image {
          data {
            id
            attributes {
              url
            }
          }
        }
        description
        english_name
      }
    }
  }
}
    `;

/**
 * __useBrandsQuery__
 *
 * To run a query within a React component, call `useBrandsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrandsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrandsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBrandsQuery(baseOptions?: Apollo.QueryHookOptions<BrandsQuery, BrandsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BrandsQuery, BrandsQueryVariables>(BrandsDocument, options);
      }
export function useBrandsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BrandsQuery, BrandsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BrandsQuery, BrandsQueryVariables>(BrandsDocument, options);
        }
export function useBrandsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<BrandsQuery, BrandsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BrandsQuery, BrandsQueryVariables>(BrandsDocument, options);
        }
export type BrandsQueryHookResult = ReturnType<typeof useBrandsQuery>;
export type BrandsLazyQueryHookResult = ReturnType<typeof useBrandsLazyQuery>;
export type BrandsSuspenseQueryHookResult = ReturnType<typeof useBrandsSuspenseQuery>;
export type BrandsQueryResult = Apollo.QueryResult<BrandsQuery, BrandsQueryVariables>;
export const NewsBarQueryDocument = gql`
    query NewsBarQuery {
  posts(
    filters: {type: {eq: "news"}}
    sort: ["publishedAt:desc"]
    pagination: {pageSize: 20}
  ) {
    data {
      id
      attributes {
        titre
        publishedAt
        main_tag {
          data {
            attributes {
              name
            }
          }
        }
        main_image {
          data {
            attributes {
              url
              previewUrl
              formats
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useNewsBarQueryQuery__
 *
 * To run a query within a React component, call `useNewsBarQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsBarQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsBarQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useNewsBarQueryQuery(baseOptions?: Apollo.QueryHookOptions<NewsBarQueryQuery, NewsBarQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NewsBarQueryQuery, NewsBarQueryQueryVariables>(NewsBarQueryDocument, options);
      }
export function useNewsBarQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewsBarQueryQuery, NewsBarQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NewsBarQueryQuery, NewsBarQueryQueryVariables>(NewsBarQueryDocument, options);
        }
export function useNewsBarQuerySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<NewsBarQueryQuery, NewsBarQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<NewsBarQueryQuery, NewsBarQueryQueryVariables>(NewsBarQueryDocument, options);
        }
export type NewsBarQueryQueryHookResult = ReturnType<typeof useNewsBarQueryQuery>;
export type NewsBarQueryLazyQueryHookResult = ReturnType<typeof useNewsBarQueryLazyQuery>;
export type NewsBarQuerySuspenseQueryHookResult = ReturnType<typeof useNewsBarQuerySuspenseQuery>;
export type NewsBarQueryQueryResult = Apollo.QueryResult<NewsBarQueryQuery, NewsBarQueryQueryVariables>;
export const ProductBarDocument = gql`
    query ProductBar {
  products(sort: ["publishedAt:desc"], pagination: {pageSize: 20}) {
    data {
      id
      attributes {
        name
        name_en
        main_image {
          data {
            attributes {
              url
              previewUrl
              formats
            }
          }
        }
        attribute_values {
          data {
            attributes {
              value
            }
          }
        }
        variant(pagination: {page: 1, pageSize: 40}) {
          id
          price
        }
      }
    }
  }
}
    `;

/**
 * __useProductBarQuery__
 *
 * To run a query within a React component, call `useProductBarQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductBarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductBarQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductBarQuery(baseOptions?: Apollo.QueryHookOptions<ProductBarQuery, ProductBarQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductBarQuery, ProductBarQueryVariables>(ProductBarDocument, options);
      }
export function useProductBarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductBarQuery, ProductBarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductBarQuery, ProductBarQueryVariables>(ProductBarDocument, options);
        }
export function useProductBarSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductBarQuery, ProductBarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductBarQuery, ProductBarQueryVariables>(ProductBarDocument, options);
        }
export type ProductBarQueryHookResult = ReturnType<typeof useProductBarQuery>;
export type ProductBarLazyQueryHookResult = ReturnType<typeof useProductBarLazyQuery>;
export type ProductBarSuspenseQueryHookResult = ReturnType<typeof useProductBarSuspenseQuery>;
export type ProductBarQueryResult = Apollo.QueryResult<ProductBarQuery, ProductBarQueryVariables>;
export const ReviewBarDocument = gql`
    query ReviewBar {
  posts(
    filters: {type: {eq: "review"}}
    sort: ["publishedAt:desc"]
    pagination: {page: 1, pageSize: 5}
  ) {
    data {
      id
      attributes {
        titre
        publishedAt
        main_tag {
          data {
            attributes {
              name
            }
          }
        }
        main_image {
          data {
            attributes {
              url
              previewUrl
              formats
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useReviewBarQuery__
 *
 * To run a query within a React component, call `useReviewBarQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewBarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewBarQuery({
 *   variables: {
 *   },
 * });
 */
export function useReviewBarQuery(baseOptions?: Apollo.QueryHookOptions<ReviewBarQuery, ReviewBarQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReviewBarQuery, ReviewBarQueryVariables>(ReviewBarDocument, options);
      }
export function useReviewBarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewBarQuery, ReviewBarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReviewBarQuery, ReviewBarQueryVariables>(ReviewBarDocument, options);
        }
export function useReviewBarSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ReviewBarQuery, ReviewBarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ReviewBarQuery, ReviewBarQueryVariables>(ReviewBarDocument, options);
        }
export type ReviewBarQueryHookResult = ReturnType<typeof useReviewBarQuery>;
export type ReviewBarLazyQueryHookResult = ReturnType<typeof useReviewBarLazyQuery>;
export type ReviewBarSuspenseQueryHookResult = ReturnType<typeof useReviewBarSuspenseQuery>;
export type ReviewBarQueryResult = Apollo.QueryResult<ReviewBarQuery, ReviewBarQueryVariables>;
export const TrendPostDocument = gql`
    query TrendPost {
  posts(
    filters: {is_hot: {eq: true}}
    sort: ["publishedAt:desc"]
    pagination: {page: 1, pageSize: 5}
  ) {
    data {
      id
      attributes {
        titre
        publishedAt
        main_tag {
          data {
            attributes {
              name
            }
          }
        }
        main_image {
          data {
            attributes {
              url
              previewUrl
              formats
            }
          }
        }
        type
        reading_time
      }
    }
  }
}
    `;

/**
 * __useTrendPostQuery__
 *
 * To run a query within a React component, call `useTrendPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrendPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrendPostQuery({
 *   variables: {
 *   },
 * });
 */
export function useTrendPostQuery(baseOptions?: Apollo.QueryHookOptions<TrendPostQuery, TrendPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrendPostQuery, TrendPostQueryVariables>(TrendPostDocument, options);
      }
export function useTrendPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrendPostQuery, TrendPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrendPostQuery, TrendPostQueryVariables>(TrendPostDocument, options);
        }
export function useTrendPostSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TrendPostQuery, TrendPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TrendPostQuery, TrendPostQueryVariables>(TrendPostDocument, options);
        }
export type TrendPostQueryHookResult = ReturnType<typeof useTrendPostQuery>;
export type TrendPostLazyQueryHookResult = ReturnType<typeof useTrendPostLazyQuery>;
export type TrendPostSuspenseQueryHookResult = ReturnType<typeof useTrendPostSuspenseQuery>;
export type TrendPostQueryResult = Apollo.QueryResult<TrendPostQuery, TrendPostQueryVariables>;
export const NewsDetailDocument = gql`
    query NewsDetail($id: ID) {
  post(id: $id) {
    data {
      id
      attributes {
        titre
        main_text
        source
        reading_time
        summary
        publishedAt
        main_tag {
          data {
            id
            attributes {
              name
              main_tag_posts(
                filters: {id: {not: {eq: $id}}, type: {eq: "news"}}
                pagination: {page: 1, pageSize: 8}
                sort: ["publishedAt:desc"]
              ) {
                data {
                  id
                  attributes {
                    titre
                    main_image {
                      data {
                        attributes {
                          url
                          previewUrl
                          formats
                        }
                      }
                    }
                    publishedAt
                  }
                }
              }
            }
          }
        }
        main_image {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useNewsDetailQuery__
 *
 * To run a query within a React component, call `useNewsDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNewsDetailQuery(baseOptions?: Apollo.QueryHookOptions<NewsDetailQuery, NewsDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NewsDetailQuery, NewsDetailQueryVariables>(NewsDetailDocument, options);
      }
export function useNewsDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewsDetailQuery, NewsDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NewsDetailQuery, NewsDetailQueryVariables>(NewsDetailDocument, options);
        }
export function useNewsDetailSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<NewsDetailQuery, NewsDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<NewsDetailQuery, NewsDetailQueryVariables>(NewsDetailDocument, options);
        }
export type NewsDetailQueryHookResult = ReturnType<typeof useNewsDetailQuery>;
export type NewsDetailLazyQueryHookResult = ReturnType<typeof useNewsDetailLazyQuery>;
export type NewsDetailSuspenseQueryHookResult = ReturnType<typeof useNewsDetailSuspenseQuery>;
export type NewsDetailQueryResult = Apollo.QueryResult<NewsDetailQuery, NewsDetailQueryVariables>;
export const TrendNewsDocument = gql`
    query TrendNews {
  posts(
    filters: {is_hot: {eq: true}, type: {eq: "news"}}
    pagination: {page: 1, pageSize: 10}
    sort: ["publishedAt:desc"]
  ) {
    data {
      id
      attributes {
        titre
        publishedAt
        main_image {
          data {
            id
            attributes {
              url
              previewUrl
              formats
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useTrendNewsQuery__
 *
 * To run a query within a React component, call `useTrendNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrendNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrendNewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTrendNewsQuery(baseOptions?: Apollo.QueryHookOptions<TrendNewsQuery, TrendNewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrendNewsQuery, TrendNewsQueryVariables>(TrendNewsDocument, options);
      }
export function useTrendNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrendNewsQuery, TrendNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrendNewsQuery, TrendNewsQueryVariables>(TrendNewsDocument, options);
        }
export function useTrendNewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TrendNewsQuery, TrendNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TrendNewsQuery, TrendNewsQueryVariables>(TrendNewsDocument, options);
        }
export type TrendNewsQueryHookResult = ReturnType<typeof useTrendNewsQuery>;
export type TrendNewsLazyQueryHookResult = ReturnType<typeof useTrendNewsLazyQuery>;
export type TrendNewsSuspenseQueryHookResult = ReturnType<typeof useTrendNewsSuspenseQuery>;
export type TrendNewsQueryResult = Apollo.QueryResult<TrendNewsQuery, TrendNewsQueryVariables>;
export const RelatedNewsDocument = gql`
    query RelatedNews($id: ID) {
  posts(
    filters: {id: {not: {eq: $id}}, type: {eq: "news"}}
    sort: ["publishedAt:desc"]
    pagination: {page: 1, pageSize: 8}
  ) {
    data {
      id
      attributes {
        titre
        publishedAt
        main_image {
          data {
            attributes {
              url
              formats
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useRelatedNewsQuery__
 *
 * To run a query within a React component, call `useRelatedNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRelatedNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRelatedNewsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRelatedNewsQuery(baseOptions?: Apollo.QueryHookOptions<RelatedNewsQuery, RelatedNewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RelatedNewsQuery, RelatedNewsQueryVariables>(RelatedNewsDocument, options);
      }
export function useRelatedNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RelatedNewsQuery, RelatedNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RelatedNewsQuery, RelatedNewsQueryVariables>(RelatedNewsDocument, options);
        }
export function useRelatedNewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RelatedNewsQuery, RelatedNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RelatedNewsQuery, RelatedNewsQueryVariables>(RelatedNewsDocument, options);
        }
export type RelatedNewsQueryHookResult = ReturnType<typeof useRelatedNewsQuery>;
export type RelatedNewsLazyQueryHookResult = ReturnType<typeof useRelatedNewsLazyQuery>;
export type RelatedNewsSuspenseQueryHookResult = ReturnType<typeof useRelatedNewsSuspenseQuery>;
export type RelatedNewsQueryResult = Apollo.QueryResult<RelatedNewsQuery, RelatedNewsQueryVariables>;
export const ProductDetailDocument = gql`
    query ProductDetail($id: ID) {
  product(id: $id) {
    data {
      id
      attributes {
        attribute_values(pagination: {page: 1, pageSize: 60}) {
          data {
            attributes {
              value
              attribute_id {
                data {
                  attributes {
                    name
                    is_featured
                    featured_priority
                    attr_cat_priority
                    attribute_category {
                      data {
                        id
                        attributes {
                          title
                          priority
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        name
        main_image {
          data {
            attributes {
              url
              previewUrl
              formats
            }
          }
        }
        images(pagination: {page: 1, pageSize: 30}) {
          data {
            attributes {
              url
            }
          }
        }
        brand {
          data {
            attributes {
              persian_name
              products(
                filters: {id: {not: {eq: $id}}}
                pagination: {page: 1, pageSize: 10}
                sort: ["publishedAt:desc"]
              ) {
                data {
                  id
                  attributes {
                    name
                    attribute_values {
                      data {
                        attributes {
                          value
                        }
                      }
                    }
                    variant(pagination: {page: 1, pageSize: 40}) {
                      id
                      price
                    }
                    main_image {
                      data {
                        id
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        posts(pagination: {page: 1, pageSize: 10}) {
          data {
            attributes {
              titre
              main_image {
                data {
                  attributes {
                    url
                  }
                }
              }
              publishedAt
            }
          }
        }
        variant(pagination: {page: 1, pageSize: 20}) {
          id
          price
        }
        market_status
      }
    }
  }
}
    `;

/**
 * __useProductDetailQuery__
 *
 * To run a query within a React component, call `useProductDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductDetailQuery(baseOptions?: Apollo.QueryHookOptions<ProductDetailQuery, ProductDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductDetailQuery, ProductDetailQueryVariables>(ProductDetailDocument, options);
      }
export function useProductDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductDetailQuery, ProductDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductDetailQuery, ProductDetailQueryVariables>(ProductDetailDocument, options);
        }
export function useProductDetailSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductDetailQuery, ProductDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductDetailQuery, ProductDetailQueryVariables>(ProductDetailDocument, options);
        }
export type ProductDetailQueryHookResult = ReturnType<typeof useProductDetailQuery>;
export type ProductDetailLazyQueryHookResult = ReturnType<typeof useProductDetailLazyQuery>;
export type ProductDetailSuspenseQueryHookResult = ReturnType<typeof useProductDetailSuspenseQuery>;
export type ProductDetailQueryResult = Apollo.QueryResult<ProductDetailQuery, ProductDetailQueryVariables>;
export const ProductDetailBarDocument = gql`
    query ProductDetailBar($id: ID) {
  products(
    filters: {id: {not: {eq: $id}}}
    sort: ["publishedAt:desc"]
    pagination: {page: 1, pageSize: 10}
  ) {
    data {
      id
      attributes {
        name
        name_en
        main_image {
          data {
            attributes {
              url
              previewUrl
            }
          }
        }
        attribute_values {
          data {
            attributes {
              value
            }
          }
        }
        variant(pagination: {page: 1, pageSize: 40}) {
          id
          price
        }
      }
    }
  }
}
    `;

/**
 * __useProductDetailBarQuery__
 *
 * To run a query within a React component, call `useProductDetailBarQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductDetailBarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductDetailBarQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductDetailBarQuery(baseOptions?: Apollo.QueryHookOptions<ProductDetailBarQuery, ProductDetailBarQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductDetailBarQuery, ProductDetailBarQueryVariables>(ProductDetailBarDocument, options);
      }
export function useProductDetailBarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductDetailBarQuery, ProductDetailBarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductDetailBarQuery, ProductDetailBarQueryVariables>(ProductDetailBarDocument, options);
        }
export function useProductDetailBarSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductDetailBarQuery, ProductDetailBarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductDetailBarQuery, ProductDetailBarQueryVariables>(ProductDetailBarDocument, options);
        }
export type ProductDetailBarQueryHookResult = ReturnType<typeof useProductDetailBarQuery>;
export type ProductDetailBarLazyQueryHookResult = ReturnType<typeof useProductDetailBarLazyQuery>;
export type ProductDetailBarSuspenseQueryHookResult = ReturnType<typeof useProductDetailBarSuspenseQuery>;
export type ProductDetailBarQueryResult = Apollo.QueryResult<ProductDetailBarQuery, ProductDetailBarQueryVariables>;
export const ProductDetailSeoDocument = gql`
    query ProductDetailSeo($id: ID) {
  product(id: $id) {
    data {
      id
      attributes {
        seo {
          metaTitle
          metaDescription
          slug
          canonicalURL
          metaRobots
        }
        name
        name_en
      }
    }
  }
}
    `;

/**
 * __useProductDetailSeoQuery__
 *
 * To run a query within a React component, call `useProductDetailSeoQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductDetailSeoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductDetailSeoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductDetailSeoQuery(baseOptions?: Apollo.QueryHookOptions<ProductDetailSeoQuery, ProductDetailSeoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductDetailSeoQuery, ProductDetailSeoQueryVariables>(ProductDetailSeoDocument, options);
      }
export function useProductDetailSeoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductDetailSeoQuery, ProductDetailSeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductDetailSeoQuery, ProductDetailSeoQueryVariables>(ProductDetailSeoDocument, options);
        }
export function useProductDetailSeoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductDetailSeoQuery, ProductDetailSeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductDetailSeoQuery, ProductDetailSeoQueryVariables>(ProductDetailSeoDocument, options);
        }
export type ProductDetailSeoQueryHookResult = ReturnType<typeof useProductDetailSeoQuery>;
export type ProductDetailSeoLazyQueryHookResult = ReturnType<typeof useProductDetailSeoLazyQuery>;
export type ProductDetailSeoSuspenseQueryHookResult = ReturnType<typeof useProductDetailSeoSuspenseQuery>;
export type ProductDetailSeoQueryResult = Apollo.QueryResult<ProductDetailSeoQuery, ProductDetailSeoQueryVariables>;
export const TechReviewDetailDocument = gql`
    query TechReviewDetail($id: ID) {
  post(id: $id) {
    data {
      id
      attributes {
        titre
        main_text
        source
        reading_time
        summary
        publishedAt
        main_tag {
          data {
            id
            attributes {
              name
              main_tag_posts(
                filters: {id: {not: {eq: $id}}, type: {eq: "review"}}
                pagination: {page: 1, pageSize: 8}
                sort: ["publishedAt:desc"]
              ) {
                data {
                  id
                  attributes {
                    titre
                    main_image {
                      data {
                        attributes {
                          url
                          formats
                        }
                      }
                    }
                    publishedAt
                  }
                }
              }
            }
          }
        }
        main_image {
          data {
            attributes {
              url
              formats
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useTechReviewDetailQuery__
 *
 * To run a query within a React component, call `useTechReviewDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useTechReviewDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTechReviewDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTechReviewDetailQuery(baseOptions?: Apollo.QueryHookOptions<TechReviewDetailQuery, TechReviewDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TechReviewDetailQuery, TechReviewDetailQueryVariables>(TechReviewDetailDocument, options);
      }
export function useTechReviewDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TechReviewDetailQuery, TechReviewDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TechReviewDetailQuery, TechReviewDetailQueryVariables>(TechReviewDetailDocument, options);
        }
export function useTechReviewDetailSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TechReviewDetailQuery, TechReviewDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TechReviewDetailQuery, TechReviewDetailQueryVariables>(TechReviewDetailDocument, options);
        }
export type TechReviewDetailQueryHookResult = ReturnType<typeof useTechReviewDetailQuery>;
export type TechReviewDetailLazyQueryHookResult = ReturnType<typeof useTechReviewDetailLazyQuery>;
export type TechReviewDetailSuspenseQueryHookResult = ReturnType<typeof useTechReviewDetailSuspenseQuery>;
export type TechReviewDetailQueryResult = Apollo.QueryResult<TechReviewDetailQuery, TechReviewDetailQueryVariables>;
export const ReviewDetailBarDocument = gql`
    query ReviewDetailBar($id: ID) {
  posts(
    filters: {id: {not: {eq: $id}}, type: {eq: "review"}}
    sort: ["publishedAt:desc"]
    pagination: {page: 1, pageSize: 8}
  ) {
    data {
      id
      attributes {
        titre
        publishedAt
        main_tag {
          data {
            attributes {
              name
            }
          }
        }
        main_image {
          data {
            attributes {
              url
              previewUrl
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useReviewDetailBarQuery__
 *
 * To run a query within a React component, call `useReviewDetailBarQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewDetailBarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewDetailBarQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReviewDetailBarQuery(baseOptions?: Apollo.QueryHookOptions<ReviewDetailBarQuery, ReviewDetailBarQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReviewDetailBarQuery, ReviewDetailBarQueryVariables>(ReviewDetailBarDocument, options);
      }
export function useReviewDetailBarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewDetailBarQuery, ReviewDetailBarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReviewDetailBarQuery, ReviewDetailBarQueryVariables>(ReviewDetailBarDocument, options);
        }
export function useReviewDetailBarSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ReviewDetailBarQuery, ReviewDetailBarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ReviewDetailBarQuery, ReviewDetailBarQueryVariables>(ReviewDetailBarDocument, options);
        }
export type ReviewDetailBarQueryHookResult = ReturnType<typeof useReviewDetailBarQuery>;
export type ReviewDetailBarLazyQueryHookResult = ReturnType<typeof useReviewDetailBarLazyQuery>;
export type ReviewDetailBarSuspenseQueryHookResult = ReturnType<typeof useReviewDetailBarSuspenseQuery>;
export type ReviewDetailBarQueryResult = Apollo.QueryResult<ReviewDetailBarQuery, ReviewDetailBarQueryVariables>;
export const ReviewDetailSeoDocument = gql`
    query ReviewDetailSeo($id: ID) {
  post(id: $id) {
    data {
      id
      attributes {
        seo {
          metaTitle
          metaDescription
          slug
          canonicalURL
          metaRobots
        }
        titre
      }
    }
  }
}
    `;

/**
 * __useReviewDetailSeoQuery__
 *
 * To run a query within a React component, call `useReviewDetailSeoQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewDetailSeoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewDetailSeoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReviewDetailSeoQuery(baseOptions?: Apollo.QueryHookOptions<ReviewDetailSeoQuery, ReviewDetailSeoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReviewDetailSeoQuery, ReviewDetailSeoQueryVariables>(ReviewDetailSeoDocument, options);
      }
export function useReviewDetailSeoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewDetailSeoQuery, ReviewDetailSeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReviewDetailSeoQuery, ReviewDetailSeoQueryVariables>(ReviewDetailSeoDocument, options);
        }
export function useReviewDetailSeoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ReviewDetailSeoQuery, ReviewDetailSeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ReviewDetailSeoQuery, ReviewDetailSeoQueryVariables>(ReviewDetailSeoDocument, options);
        }
export type ReviewDetailSeoQueryHookResult = ReturnType<typeof useReviewDetailSeoQuery>;
export type ReviewDetailSeoLazyQueryHookResult = ReturnType<typeof useReviewDetailSeoLazyQuery>;
export type ReviewDetailSeoSuspenseQueryHookResult = ReturnType<typeof useReviewDetailSeoSuspenseQuery>;
export type ReviewDetailSeoQueryResult = Apollo.QueryResult<ReviewDetailSeoQuery, ReviewDetailSeoQueryVariables>;
import { gql } from "@apollo/client";
export const CATS_QUERY = gql`
query GetCats {
categories
{
  title
  id
  items
  {
    id
    title
     price
 }
}
}
`;

export const FORMC_QUERY = gql`
query makeFormCategories {
categories
{
  title
  id
}
}
`;

export const FORMP_QUERY = gql`
query makeFormItems {
items
{
  title
  id
}
}
`;

export const ITEMS_QUERY = gql`
query GetItems {
items
{
  id
  title
  quantity
  category{
    title
  }
}
}
`;
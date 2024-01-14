import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from "react-admin";

const productFilters = [
  <TextInput source="q" label="Produto" alwaysOn />,
  <ReferenceInput source="groupId" reference="products/groups" label="Grupo">
    <AutocompleteInput optionText="description" label="Grupo" />
  </ReferenceInput>,
];

const ProductList = () => (
  <List filters={productFilters}>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <TextField source="description" label="Descrição" />
      <TextField source="groupId" label="Grupo" />
      <TextField source="purchaseUnitId" label="Unidade de compra" />
      <TextField source="unitMeasureId" label="Unidade do produto" />
      <TextField source="statusId" label="Status" />
      <NumberField
        source="purchasePrice"
        label="Preço"
        options={{ style: "currency", currency: "BRL" }}
      />
      <EditButton />
    </Datagrid>
  </List>
);

export default ProductList;

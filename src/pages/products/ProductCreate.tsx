import {
  Create,
  NumberInput,
  PasswordInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { Box, Typography } from "@mui/material";
import { AutoReferenceInput } from "../../components/common/AutoReferenceInput";

const ProductCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <Typography variant="h5" gutterBottom>
          <Box sx={{ fontWeight: "bold" }}>Cadastro de Produto</Box>
        </Typography>

        <Box display={{ xs: "block", sm: "flex", width: "80%" }}>
          <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
            <TextInput
              source="description"
              label="Descrição"
              isRequired
              fullWidth
            />
          </Box>
          <AutoReferenceInput
            source="groupId"
            reference="products/groups"
            optionTextField="description"
            label="Grupo"
          />
          <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
            <AutoReferenceInput
              source="companyId"
              reference="companies"
              optionTextField="tradingName"
              label="Empresa"
            />
          </Box>
        </Box>

        <Separator />

        <Typography variant="h6" gutterBottom>
          Aquisição
        </Typography>

        <Box display={{ xs: "block", sm: "flex" }}>
          <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
            <NumberInput source="purchasePrice" label="Preço de Compra" />
            <AutoReferenceInput
              source="originId"
              reference="products/origins"
              optionTextField="description"
              label="Procedência"
            />
          </Box>

          <Box flex={2}>
            <AutoReferenceInput
              source="purchaseUnitId"
              reference="units/products/purchase"
              optionTextField="description"
              label="Unidade de Compra"
            />
          </Box>
        </Box>

        <Separator />

        <Typography variant="h6" gutterBottom>
          Armazenamento
        </Typography>

        <Box display={{ xs: "block", sm: "flex" }}>
          <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
            <AutoReferenceInput
              source="unitMeasureId"
              reference="units/products"
              optionTextField="description"
              label="Unidade de Medida"
            />
          </Box>
          <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
            <AutoReferenceInput
              source="statusId"
              reference="products/statuses"
              optionTextField="description"
              label="Status"
            />
          </Box>
        </Box>
      </SimpleForm>
    </Create>
  );
};

const Separator = () => <Box pt="1em" />;

export default ProductCreate;
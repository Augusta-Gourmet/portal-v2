import { AutocompleteInput, ReferenceInput, SelectInput } from "react-admin";

interface AutoReferenceInputProps {
  source: string;
  reference: string;
  label?: string;
  optionTextField: string;
  filter?: any;
}

export const AutoReferenceInput = (props: AutoReferenceInputProps) => {
  const {
    source,
    reference,
    label = undefined,
    optionTextField,
    // filter = undefined,
  } = props;
  return (
    <ReferenceInput source={source} reference={reference}>
      <SelectInput optionText={optionTextField} label={label} value={""} />
    </ReferenceInput>
  );
};

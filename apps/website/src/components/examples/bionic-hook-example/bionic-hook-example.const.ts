export const BIONIC_HOOK_EXAMPLE = 
`const BionicSwitch = () => {
  const { bionicMode, setBionicMode } = useBionic();

  return (
    <div>
      <p>Bionic Mode: </p>
      <p>Off</p>
      <Switch
        onCheckedChange={(checked) => setBionicMode(checked)}
        checked={bionicMode}
      />
      <p>On</p>
    </div>
  );
};

export default BionicSwitch;`
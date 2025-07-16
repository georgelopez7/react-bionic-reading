import { useBionic } from '../../store/useBionic';
import { Icon } from '../icons/icon';
import './bionic-toggle-button.css';
import { IBionicToggleButtonProps } from './bionic-toggle-button.interface';

export const BionicToggleButton = (props: IBionicToggleButtonProps) => {
  const { isBionic, setIsBionic } = useBionic();

  return (
    <button
      onClick={() => setIsBionic(!isBionic)}
      className="bionic-toggle-button"
    >
      {isBionic ? <Icon name="enabled" /> : <Icon name="disabled" />}
    </button>
  );
};
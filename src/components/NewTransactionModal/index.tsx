import { Container } from './styles';
import imgModalClose from '../../assets/imgModalClose.svg';
import Modal from 'react-modal';

interface NewTransactionalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button"
        onClick={onRequestClose}
        className="react-modal-close">
        <img src={imgModalClose} alt="fechar modal" />
      </button>
      <Container>
        <h2> Castastrar Transação </h2>
        <input
          placeholder="Título"
        />
        <input
          type="number"
          placeholder="Valor"
        />
        <input
          placeholder="Categoria"
        />
        <button type="submit"> Cadastrar </button>

      </Container>
    </Modal>

  );
}
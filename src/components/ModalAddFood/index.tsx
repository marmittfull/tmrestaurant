import { FiCheckSquare } from 'react-icons/fi';
import { useRef } from 'react';
import { Form } from './styles';
import { Modal } from '../Modal';
import { Input } from '../Input';
import { FoodType } from '../../types/Food';
import { FormHandles } from '@unform/core';

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: NewFood) => Promise<void>;
}

type NewFood = Omit<FoodType, 'id'>;

export const ModalAddFood = (props : ModalAddFoodProps) => {
  const formRef = useRef<FormHandles>();

  const handleSubmit = async (data : NewFood) => {
    props.handleAddFood(data);
    props.setIsOpen();
  };
  return (
    <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" icon={''} />

        <Input name="name" placeholder="Ex: Moda Italiana" icon={''} />
        <Input name="price" placeholder="Ex: 19.90" icon={''} />

        <Input name="description" placeholder="Descrição" icon={''} />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};
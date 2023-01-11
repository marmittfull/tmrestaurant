import { useRef, createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import {Modal} from '../Modal';
import { Input } from '../Input';
import { FoodType } from '../../types/Food';

interface ModalEditFoodProps {
  editingFood: FoodType;
  setIsOpen: () => void;
  isOpen: boolean;
  handleUpdateFood: (food : FoodType) => Promise<void>;
}

export const ModalEditFood = (props: ModalEditFoodProps) => {
  const formRef = createRef();

  const handleSubmit = async (data: FoodType) => {
    props.handleUpdateFood(data);
    props.setIsOpen();
  };
    return (
      <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
        <Form onSubmit={handleSubmit} initialData={props.editingFood}>
          <h1>Editar Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" icon={''} />

          <Input name="name" placeholder="Ex: Moda Italiana" icon={''} />
          <Input name="price" placeholder="Ex: 19.90" icon={''} />

          <Input name="description" placeholder="Descrição" icon={''} />

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
};
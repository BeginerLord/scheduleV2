import React, { useState } from "react";
import style from "./ButtoMenu.module.css";
import LockIcon from "./icons/inactive";
import EditIcon from "./icons";
import { Modal } from "@mui/material";
import AlertIcon from "./icons/alertInactive";

interface Props {
  onDeactivate: () => Promise<void> | void;
  onEdit: () => void;
  isPendingDeactivate?: boolean;
  isPendingEdit?: boolean;
  label?: string;
  title?: string;
  children?: React.ReactNode;

}
const MenuButtonComponent: React.FC<Props> = ({
  onDeactivate,
  onEdit,
  isPendingDeactivate,
  isPendingEdit,
  label,
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeactivateModalOpen, setIsDeactivateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openDeactiveModal = () => {
    setIsDeactivateModalOpen(!isDeactivateModalOpen);
    setIsOpen(false); //cierra el menu button
  };

  const openEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDeactivate = () => {
    onDeactivate(),
    setIsDeactivateModalOpen(false);
  };

  const handleEdit = () => {
    onEdit(),
    setIsEditModalOpen(false);
  };

  return (
    <div className={style.container}>
      <button className={style.menuButton} onClick={toggleMenu}>
        &#x22EE;
      </button>
      {isOpen && (
        <div className={style.menu}>
          <button onClick={openDeactiveModal}>
            <LockIcon width="16px" height="16px" />
            <span> INACTIVAR</span>
          </button>

          <button onClick={openEditModal}>
            <EditIcon width="16px" height="16px" />
            <span> EDITAR</span>
          </button>
        </div>
      )}
      <Modal open={isDeactivateModalOpen} onClose={openDeactiveModal}>
        <div className={style.modal}>
          <div className={style.image}>
            <AlertIcon />
          </div>
          <div className={style.content}>
            <span className={style.title}> {title}</span>
            <p className={style.message}>{label}</p>
          </div>
          <div className={style.actions}>
            <button
              className={style.desactivate}
              onClick={handleDeactivate}
              disabled={isPendingDeactivate}
              type="submit"
            >
              Desactivar
            </button>
            <button
              className={style.cancel}
              type="button"
              onClick={openDeactiveModal}
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>

      {/* MODAL EDITAR */}
      <Modal open={isEditModalOpen} onClose={openEditModal}>
        <>
          {children}

          <div className={style.container_modal_edit}>
            <button className={style.cancel_edit} onClick={openEditModal}>
              cancelar
            </button>

            <button className={style.confir_edit} type="submit"
            onClick={handleEdit}
            disabled={isPendingEdit}
            >
              confirmar
            </button>
          </div>
        </>
      </Modal>
    </div>
  );
};

export default MenuButtonComponent;
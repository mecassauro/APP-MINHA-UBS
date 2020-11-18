import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Card, Modal, Text} from '@ui-kitten/components';

export const ModalWithBackdropShowcase = ({
  isOpen,
  title,
  message,
  close,
  type,
}) => {
  if (type === 'loading') {
    return (
      <Modal visible={isOpen} backdropStyle={styles.backdrop}>
        <Card disabled={true}>
          <Text>Carregando...</Text>
        </Card>
      </Modal>
    );
  } else {
    return (
      <Modal visible={isOpen} backdropStyle={styles.backdrop}>
        <Card style={{width: 250}} disabled={true}>
          <Text style={styles.title}>{title}:</Text>
          <Text style={styles.message}>{message}</Text>
          <Button onPress={close}>OK!</Button>
        </Card>
      </Modal>
    );
  }
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
  },
  message: {
    fontSize: 16,
    marginBottom: 24,
  },
});

export default ModalWithBackdropShowcase;

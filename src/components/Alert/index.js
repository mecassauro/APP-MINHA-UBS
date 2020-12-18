import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Card, Modal, Text} from '@ui-kitten/components';
import Feather from 'react-native-vector-icons/Feather';
import {Title} from './styles';

export const ModalWithBackdropShowcase = ({
  isOpen,
  close,
  type,
  title,
  message,
}) => {
  const statusColor = {
    error: '#e41818',
    success: '#04D361',
  };
  const statusIcon = {
    error: 'x-circle',
    success: 'check',
  };

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
        <Card
          style={{
            width: 250,
            borderColor: statusColor[type],
            borderWidth: 2,
            borderRadius: 12,
          }}
          disabled={true}>
          <Title>
            <Feather
              name={statusIcon[type]}
              size={24}
              color={statusColor[type]}
            />
            <Text style={styles.title}>{title}:</Text>
          </Title>
          <Text style={styles.message}>{message}</Text>
          {type !== 'success' && <Button onPress={close}>OK!</Button>}
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
    marginLeft: 8,
  },
  message: {
    fontSize: 16,
    marginBottom: 24,
  },
});

export default ModalWithBackdropShowcase;

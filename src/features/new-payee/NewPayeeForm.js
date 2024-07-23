import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, TextInput, Button, Text } from 'react-native-paper';

const NewPayeeForm = () => {
    const [name, setName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [secondAccountNumber, setSecondAccountNumber] = useState('');
    const [ifscCode, setIfscCode] = useState('');
    const [bankName, setBankName] = useState('');

    const handleSubmit = () => {
        // Handle form submission logic here
        console.log('New Payee Details:', { name, accountNumber, ifscCode, bankName });
    };

    return (
        <ScrollView style={styles.container}>
            <Card style={styles.card} mode=''>
                <Card.Title title="New Payee" />
                <Card.Content>
                    <TextInput
                        mode='outlined'
                        label="Payee Name"
                        value={name}
                        onChangeText={setName}
                        style={styles.input}
                    />
                    <TextInput
                        mode='outlined'
                        label="Account Number"
                        value={accountNumber}
                        onChangeText={setAccountNumber}
                        keyboardType="numeric"
                        style={styles.input}
                    />
                    <TextInput
                        mode='outlined'
                        label="Reenter Account Number"
                        value={secondAccountNumber}
                        onChangeText={setSecondAccountNumber}
                        keyboardType="numeric"
                        style={styles.input}
                    />
                    <TextInput
                        mode='outlined'
                        label="IFSC Code"
                        value={ifscCode.toUpperCase()}
                        onChangeText={setIfscCode}
                        style={styles.input}
                    />
                    <TextInput
                        mode='outlined'
                        label="Bank Name"
                        value={bankName}
                        onChangeText={setBankName}
                        style={styles.input}
                    />
                </Card.Content>
                <Card.Actions>
                    <Button mode="contained" onPress={handleSubmit} style={styles.button}>
                        Add Payee
                    </Button>
                </Card.Actions>
            </Card>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    card: {
        margin: 16,
    },
    input: {
        marginBottom: 8,
    },
    button: {
        marginTop: 8,
    },
});

export default NewPayeeForm;

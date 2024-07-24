import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Card, TextInput, Chip, Button, Text, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import ConfirmationScreen from './ConfirmationScreen';
import OTPScreen from './OTPScreen';

const chips = [
    { id: '1', label: 'Family' },
    { id: '2', label: 'Investment' },
    { id: '3', label: 'Others' },
];

const NewPayeeForm = () => {
    const [name, setName] = useState('John Doe');
    const [accountNumber, setAccountNumber] = useState('5455656555');
    const [secondAccountNumber, setSecondAccountNumber] = useState('5455656555');
    const [ifscCode, setIfscCode] = useState('UTIB0004554');
    const [bankName, setBankName] = useState('BAC');
    const [amount, setAmount] = useState(0.0);
    const navigation = useNavigation();
    const [showConfirmation, setShowConfirmation] = React.useState(false);
    const [selectedChip, setSelectedChip] = useState(null);

    const handleChipPress = (id) => {
        setSelectedChip(id);
    };

    const handleSubmit = () => {
        setShowConfirmation(true);
    };

    const handleCancel = React.useCallback(() => {
        setShowConfirmation(false);
        navigation.goBack();
    }, []);

    return (
        <>
            {showConfirmation && (
                <OTPScreen/>
                // <ConfirmationScreen
                //     name={name}
                //     accountNumber={accountNumber}
                //     ifscCode={ifscCode}
                //     bankName={bankName}
                //     navigation={navigation}
                //     amount={amount}
                //     remarks={chips[selectedChip - 1]?.label}
                // />
            )}
            {!showConfirmation && (
                <ScrollView style={styles.container}>
                    <Card mode=''>
                        <TextInput
                            mode='flat'
                            value={amount}
                            onChangeText={setAmount}
                            style={styles.input}
                            inputMode='numeric'
                        />
                        <Card.Content>
                            <TextInput
                                mode='outlined'
                                label='Payee Name'
                                value={name}
                                onChangeText={setName}
                                style={styles.input}
                            />
                            <TextInput
                                mode='outlined'
                                label='Account Number'
                                value={accountNumber}
                                onChangeText={setAccountNumber}
                                keyboardType='numeric'
                                style={styles.input}
                            />
                            <TextInput
                                mode='outlined'
                                label='Reenter Account Number'
                                value={secondAccountNumber}
                                onChangeText={setSecondAccountNumber}
                                keyboardType='numeric'
                                style={styles.input}
                                secureTextEntry
                            />
                            <TextInput
                                mode='outlined'
                                label='IFSC Code'
                                value={ifscCode.toUpperCase()}
                                onChangeText={setIfscCode}
                                style={styles.input}
                            />
                            <TextInput
                                mode='outlined'
                                label='Bank Name'
                                value={bankName}
                                onChangeText={setBankName}
                                style={styles.input}
                            />
                            <Text variant='headlineSmall'>Remarks:</Text>
                            <View style={styles.chipsContainer}>
                                {chips.map((chip) => (
                                    <Chip
                                        mode='outlined'
                                        key={chip.id}
                                        style={styles.chip}
                                        selected={selectedChip === chip.id}
                                        onPress={() => handleChipPress(chip.id)}
                                    >
                                        {chip.label}
                                    </Chip>
                                ))}
                            </View>
                            <Text variant='titleSmall'>PAY FROM</Text>
                            <View style={styles.payFrom}>
                                <IconButton icon='bank' color='#006a4d' />
                                <View style={styles.pay}>
                                    <Text variant='labelSmall'>XXXX4545</Text>
                                    <Text variant='labelSmall'>SA | Account Balance:  &#x00A3;4545.54</Text>
                                </View>
                            </View>
                        </Card.Content>
                        <Card.Actions>
                            <Button mode='outlined' onPress={handleCancel}>
                                Cancel
                            </Button>
                            <Button
                                mode='contained'
                                onPress={handleSubmit}
                                style={styles.button}
                            >
                                Add Payee
                            </Button>
                        </Card.Actions>
                    </Card>
                </ScrollView>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    input: {
        marginBottom: 16,
    },
    button: {
        marginTop: 8,
    },
    chipsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'nowrap'
    },
    chip: {
        margin: 4,
    },
    payFrom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -16
    },
    pay: {
        flex: 1
    }
});

export default NewPayeeForm;

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class StrainScreen extends Component {
    static navigationOptions ={
        title: 'Strains',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justContent: 'center' }}>
            <Text>Strains List</Text>
            <Button 
                title="Click for Details"
                onPress={() => this.props.naviagation.navigate('StainDetail')}
                />
            <Button 
                title='Add Strain'
                onPress={() => this.props.naviagation.navigate('AddStrain')}
                />
            <Button 
                title='Click to Edit'
                onPress={() => this.props.naviagation.navigate('EditStain')}
                />
                </View>
        );
    }
}
export default StrainScreen;
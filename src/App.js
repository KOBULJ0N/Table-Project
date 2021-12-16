import React, { Component } from 'react';
import { Data } from './data';
import { Table } from './Components/Table';
export default class App extends Component {
  state = {
    datalist: Data,
    active: null,
    name: '',
    key: '',
    sellectedOpt: null,
  };
  render() {
    const onEdit = (value) => {
      this.setState({ active: value });
    };

    const search = (e) => {
      const newData = Data.filter((value) => {
        let Status = value[this.state.key].toLowerCase();
        return Status.includes(e.target.value.toLowerCase());
      });
      this.setState({ datalist: newData });
    };
    console.log(this.state.key);

    return (
      <div>
        <Table>
          <Table.Head>
            <Table.Tr>
              <select onChange={(e) => this.setState({ key: e.target.value })}>
                <option value='Name'>Name</option>
                <option value='status'>status</option>
                <option value='Age'>Age</option>
              </select>
              <input onChange={search} type='text' placeholder='Search' />
            </Table.Tr>
            <Table.Tr>
              <Table.Th>Id</Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Age</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Head>
          <Table.Body>
            {this.state.datalist.map(({ id, name, status, Age }, index) => (
              <Table.Tr key={index}>
                <Table.Td>{id}</Table.Td>
                <Table.Td>{name}</Table.Td>
                <Table.Td>{status}</Table.Td>
                <Table.Td>{Age}</Table.Td>
                <Table.Td>
                  <button onClick={() => onEdit({ id, name, status, Age })}>
                    {this.state?.active?.id === id ? 'save' : 'edit'}
                  </button>
                  <Table.btn>delete</Table.btn>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

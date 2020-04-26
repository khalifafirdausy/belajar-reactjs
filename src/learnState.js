import React, { Component } from 'react'
import {Button} from 'reactstrap'

class LearnState extends Component {

  state = {
    nama: 'kalipa',
    umur: 30,
    data_diri: {
      title: 'welcome to my channel',
      desc: 'ahhsiiap!!!',
    },
    takjil: ["es batu", "pizzaa", "gorengan"],
    friends: [
      {
        nama: 'kalipa',
        tempat: 'x deres',
        umur: 40,
        gender: 'unknown'
      },
      {
        nama: 'ucup',
        tempat: '3 raksa',
        umur: 35,
        gender: 'not defined'
      },
      {
        nama: 'hana',
        tempat: 'BSD',
        umur: 20,
        gender: 'female'
      },
    ]
  }

  changeName(){
    this.setState({nama: 'alip'})
  }

  addAge(){
    let ageNow = this.state.umur
    this.setState({umur: ageNow+1})
  }

  minAge(){
    let ageNow = this.state.umur
    if (ageNow > 18) {
      this.setState({umur: ageNow-1})
    }
  }

  render(){
    // for (let index = 0; index < this.state.takjil.length; index++) {
    //   const element = this.state.takjil[index];
    //   console.log(element)
    // }

    return(
    <div>
      <p>halooo, {this.state.nama} umur {this.state.umur}</p>
      <p>judul: {this.state.data_diri.title} deskripsi: {this.state.data_diri.desc} </p>
      <p>takjil: {this.state.takjil[2]}</p>
      <p>friend {this.state.friends[0].nama}</p>
      {
        this.state.takjil.map((data) => {
          return (
            <p>{data}</p>
          )
        })
      }
      <p>===============================</p>
      {
        this.state.friends.map((teman) => {
          return(
            <React.Fragment>
              <p>==============</p>
              <p>{teman.nama}</p>
              <p>{teman.gender}</p>
              <p>{teman.tempat}</p>
              <p>{teman.umur}</p>
              <p>==============</p>
            </React.Fragment>
          )
        })
      }
      <Button onClick={() => this.changeName()} color='success' >Ganti Nama</Button>
      <Button onClick={() => this.addAge()} color='warning' >Tambah Umur</Button>
      <Button onClick={() => this.minAge()} color='danger' >Kurangin Umur</Button>
    </div>
    )
  }
}

export default LearnState
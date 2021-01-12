import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiMockService {
  getData =  [{
      name: 'john',
      id: 1,
      type: 'Ninja'
    },
    {
      name: 'lee',
      id: 2,
      type: 'samurai'
    },
    {
      name: 'drake',
      id: 3,
      type: 'tech guy'
    },
    {
      name: 'scarlett',
      id: 4,
      type: 'unemployed'
    },
    {
      name: 'john',
      id: 1,
      type: 'Ninja'
    },
    {
      name: 'lee',
      id: 2,
      type: 'samurai'
    },
    {
      name: 'drake',
      id: 3,
      type: 'tech guy'
    },
    {
      name: 'scarlett',
      id: 4,
      type: 'unemployed'
    },
    {
      name: 'john',
      id: 1,
      type: 'Ninja'
    },
    {
      name: 'lee',
      id: 2,
      type: 'samurai'
    },
    {
      name: 'drake',
      id: 3,
      type: 'tech guy'
    },
    {
      name: 'scarlett',
      id: 4,
      type: 'unemployed'
    },
    {
      name: 'john',
      id: 1,
      type: 'Ninja'
    },
    {
      name: 'lee',
      id: 2,
      type: 'samurai'
    },
    {
      name: 'drake',
      id: 3,
      type: 'tech guy'
    },
    {
      name: 'scarlett',
      id: 4,
      type: 'unemployed'
    },
    {
      name: 'john',
      id: 1,
      type: 'Ninja'
    },
    {
      name: 'lee',
      id: 2,
      type: 'samurai'
    },
    {
      name: 'drake',
      id: 3,
      type: 'tech guy'
    },
    {
      name: 'scarlett',
      id: 4,
      type: 'unemployed'
    }
  ]

  getNames = ['John', 'Scarlett', 'drake', 'kakashi'];
  constructor() { }
  
}
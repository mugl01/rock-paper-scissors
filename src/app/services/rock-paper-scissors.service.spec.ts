import { TestBed } from '@angular/core/testing';

import { RockPaperScissorsService } from './rock-paper-scissors.service';

describe('RockPaperScissorsService', () => {
  let service: RockPaperScissorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RockPaperScissorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a string when calling getComputerSelection', ()=>{
    const resp = service.getComputerSelection();
    expect(typeof resp ).toBe('string');
  });

  it('should return a string when calling playGame', () => {
    const playerSelection = 'paper';
    const resp = service.playGame(playerSelection);
    expect(typeof resp).toBe('string');
  });

  it('should return tie when calling playGame', () => {
    const playerSelection = 'paper';
    service.computerSelection = 'paper';
    const resp = service.playGame(playerSelection);
    expect(resp).toEqual('Tie');
  });

  it('should return computer won  when calling playGame computer with paper and user with rock', () => {
    const playerSelection = 'rock';
    service.computerSelection = 'paper';
    const resp = service.playGame(playerSelection);
    expect(resp).toEqual('Computer won');
  });

  it('should return user won  when calling playGame computer with scissor and user with rock', () => {
    const playerSelection = 'rock';
    service.computerSelection = 'scissors';
    const resp = service.playGame(playerSelection);
    expect(resp).toEqual('User won');
  });

  it('should return computer won  when calling playGame computer with scissors and user with paper', () => {
    const playerSelection = 'paper';
    service.computerSelection = 'scissors';
    const resp = service.playGame(playerSelection);
    expect(resp).toEqual('Computer won');
  });

  it('should return computer won  when calling playGame computer with rock and user with scissors', () => {
    const playerSelection = 'scissors';
    service.computerSelection = 'rock';
    const resp = service.playGame(playerSelection);
    expect(resp).toEqual('Computer won');
  });

  it('should return user won  when calling playGame computer with paper and user with scissors', () => {
    const playerSelection = 'scissors';
    service.computerSelection = 'paper';
    const resp = service.playGame(playerSelection);
    expect(resp).toEqual('User won');
  });
});

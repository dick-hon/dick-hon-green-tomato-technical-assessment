import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  const mockUserData = {
    name: 'John',
    email: 'john@example.com',
    dob: new Date(),
    phoneNumber: '123456',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([mockUserData]),
            create: jest.fn().mockResolvedValue(mockUserData),
          },
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a list of users', async () => {
    expect(await controller.findAll()).toEqual([mockUserData]);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should create a user', async () => {
    expect(await controller.create(mockUserData)).toEqual(mockUserData);
    expect(service.create).toHaveBeenCalledWith(mockUserData);
  });
});

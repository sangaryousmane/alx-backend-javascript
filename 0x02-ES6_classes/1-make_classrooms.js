import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const sizeOfRooms = [19, 20, 34];
  const rooms = sizeOfRooms.map((clr) => new ClassRoom(clr));
  return rooms;
}

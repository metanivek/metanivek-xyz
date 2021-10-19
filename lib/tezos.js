import { DAppClient } from "@airgap/beacon-sdk";
const dAppClient = new DAppClient({ name: "metanivek.xyz" });

export async function connectAccount() {
  const permissions = await dAppClient.requestPermissions();
  return permissions;
}

export async function disconnectAccount() {
  return dAppClient.clearActiveAccount();
}

export async function activeAddress() {
  const activeAccount = await dAppClient.getActiveAccount();
  if (activeAccount) {
    return activeAccount.address;
  }
}

export function elidedAddress(address) {
  return `${address.slice(0, 5)}…${address.slice(
    address.length - 5,
    address.length
  )}`;
}

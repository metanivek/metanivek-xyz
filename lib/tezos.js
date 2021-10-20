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
